<template>
  <section class="section">
    <div class="container" style="padding-top:2rem;padding-bottom:2rem">
      <div>
        <p
          class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
        >
          Tábua de Maré
        </p>
        <hr style="border: 1px solid #0075bb" />
      </div>
      <search-bar
        @city-selected="citySelected"
        :hasSpot="false"
        :hasLabel="false"
      />
      <apexchart
        width="100%"
        height="420"
        type="area"
        :options="areaOptions"
        :series="tideData"
      ></apexchart>
    </div>
  </section>
</template>

<script>
import ForecastHud from "../components/ForecastHud";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

import core from "../mixins/core";
import { mapState, mapActions, mapMutations } from "vuex";

var moment = require("moment");
const WEEK_DAYS = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

export default {
  components: {
    ForecastHud,
    SearchBar,
    Tabs
  },
  mixins: [core],
  // created() {
  //   const local_lat = localStorage.getItem("lat");
  //   const local_lng = localStorage.getItem("lng");
  //   if (local_lat !== null && local_lng !== null) {
  //     const loading = this.$buefy.loading.open();
  //     this.getNearestSpot({ lat: local_lat, lng: local_lng }).then(() => {
  //       this.collectData()
  //         .then(() => loading.close())
  //         .catch(() => {
  //           loading.close();
  //           this.$buefy.toast.open({
  //             duration: 4000,
  //             message: `Ops! Não foi possível carregar os dados, tente novamente.`,
  //             position: "is-bottom",
  //             type: "is-danger"
  //           });
  //         });
  //     });
  //   }
  // },
  methods: {
    ...mapActions("marine", ["getForecast"]),
    ...mapActions("weather", ["getWeather"]),
    ...mapActions("geo", ["getNearestSpot"]),
    ...mapMutations("marine", ["setDays"]),
    collectData() {
      const lat = this.currentCity.lat;
      const lng = this.currentCity.lng;
      return Promise.all([
        this.getWeather({ lat, lng }),
        this.getForecast({ lat, lng, hourTick: 1 })
      ]);
    },
    selectedChartChange(index) {
      this.selectedChart = index;
    },
    citySelected() {
      const loading = this.$buefy.loading.open();
      const lat = this.currentCity.lat;
      const lng = this.currentCity.lng;
      Promise.all([
        this.getWeather({ lat, lng }),
        this.getForecast({ lat, lng, hourTick: 1 })
      ])
        .then(() => loading.close())
        .catch(err => {
          this.setDays([]);
          loading.close();
        });
    }
  },
  computed: {
    ...mapState("geo", ["currentCity"]),
    ...mapState("marine", ["days"]),
    waveHeightData() {
      return [
        { name: "Altura das ondas (metros)", data: this.waveHeightSeries }
      ];
    },
    wavePeriodData() {
      return [
        {
          name: "Período entre uma onda e outra (segundos)",
          data: this.wavePeriodSeries
        }
      ];
    },
    windSpeedData() {
      return [
        { name: "Velocidade dos ventos (km/h)", data: this.windSpeedSeries }
      ];
    },
    swellHeightData() {
      return [
        { name: "Altura dos swell (metros)", data: this.swellHeightSeries }
      ];
    },
    tideData() {
      return [
        this.days.length > 0
          ? { name: "Altura da maré (metros)", data: this.tideHourSeries }
          : { name: "Altura da maré (metros)", data: [] }
      ];
    },
    topThree() {
      let forecast = this.days[this.selectedDay].hourly.map(element => {
        return {
          time: element.time,
          waveHeight: element.sigHeight_m,
          wavePeriods: element.swellPeriod_secs,
          windGust: element.WindGustKmph
        };
      });
      forecast = forecast
        .sort(function(a, b) {
          if (a.waveHeight == b.waveHeight) {
            if (a.wavePeriods == b.wavePeriods) {
              return a.windGust - b.windGust;
            }
            return a.wavePeriods - b.wavePeriods;
          }
          return a.waveHeight > b.waveHeight ? -1 : 1;
        })
        .slice(0, 3);

      forecast = forecast.map((point, index) =>
        Object.assign(point, { highest: index === 0 })
      );
      forecast.sort((first, second) => {
        return Number(first.time) > Number(second.time) ? 1 : -1;
      });

      return forecast.map(point =>
        Object.assign(point, {
          time: moment(
            new Date(this.date).setHours(this.parseHour(point.time), 0, 0, 0)
          ).format("HH[h]mm")
        })
      );
    },
    week() {
      return this.days.map(day => {
        return {
          date: moment(day.date).date(),
          weekDay: WEEK_DAYS[moment(day.date).day()]
        };
      });
    },
    tideHourSeries() {
      return this.tides.map(tide => {
        return [
          moment(tide.tideDateTime, "yyyy-MM-dd HH:mm").valueOf(),
          tide.tideHeight_mt
        ];
      });
    },
    waveHeightSeries() {
      return this.days[this.selectedDay].hourly.map(day => {
        return [
          new Date(this.date).setHours(this.parseHour(day.time), 0, 0, 0),
          Number(day.sigHeight_m)
        ];
      });
    },
    wavePeriodSeries() {
      return this.days[this.selectedDay].hourly.map(day => {
        return [
          new Date(this.date).setHours(this.parseHour(day.time), 0, 0, 0),
          Number(day.swellPeriod_secs)
        ];
      });
    },
    windSpeedSeries() {
      return this.weatherDays[this.selectedDay].hourly.map(day => {
        return [
          new Date(this.date).setHours(this.parseHour(day.time), 0, 0, 0),
          Number(day.windspeedKmph)
        ];
      });
    },
    swellHeightSeries() {
      return this.days[this.selectedDay].hourly.map(day => {
        return [
          new Date(this.date).setHours(this.parseHour(day.time), 0, 0, 0),
          Number(day.swellHeight_m)
        ];
      });
    },
    selectedData() {
      switch (this.selectedChart) {
        case 0:
          return this.waveHeightData;
        case 1:
          return this.wavePeriodData;
        case 2:
          return this.windSpeedData;
        case 3:
          return this.swellHeightData;
      }
    },
    chartMax() {
      switch (this.selectedChart) {
        case 0:
          return 3;
        case 1:
          return 15;
        case 2:
          return 50;
        case 3:
          return 3;
        default:
          return 10;
      }
    },
    barOptions() {
      return {
        zoom: {
          enabled: false
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: true
        },
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          show: true,
          min: 0,
          max: this.chartMax
        },
        tooltip: {
          x: {
            show: true,
            format: "HH:mm"
          }
        }
      };
    },
    areaOptions() {
      return {
        grid: {
          show: false
        },
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false
          },
          selection: {
            enabled: false
          }
        },

        dataLabels: {
          enabled: true,
          formatter: value => {
            return `${value}m`;
          }
        },
        markers: {
          size: 0,
          style: "hollow"
        },
        xaxis: {
          type: "datetime",
          tickAmount: 12,
          labels: {
            formatter: (value, timestamp) => {
              return moment(timestamp).format("HH[h]");
            }
          }
        },
        tooltip: {
          x: {
            show: false,
            format: "HH:mm"
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        }
      };
    }
  },
  data() {
    return {
      selectedChart: 0,
      chartMin: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.is-horizontal-center {
  justify-content: center;
}
.is-horizontal-end {
  justify-content: flex-end;
}
.is-horizontal-start {
  justify-content: flex-start;
}
.comment {
  background-image: url("../assets/icons/comments.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: cover;
  width: 50px;
  height: 35px;
}
.best-secondary {
  border: 6px solid #222221;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  align-items: center;
}
.best-primary {
  border: 6px solid #0075bb;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  align-items: center;
}
</style>
