<template>
  <div class="container">
    <div class="tile is-ancestor is-vertical">
      <div class="tile is-parent" style="padding-top:5rem;padding-bottom:3rem">
        <div class="tile is-child">
          <search-bar title="PREVISÃO" @spot-selected="spotSelected" />
        </div>
      </div>
      <div v-if="days.length !== 0">
        <div class="tile is-parent">
          <div class="tile is-child is-5">
            <div class="tile is-parent is-vertical">
              <div class="tile is-child has-text-centered">
                <p class="title">{{currentSpot.name}}</p>
              </div>
              <div class="tile is-child">
                <forecast-hud
                  :waveHeight="waveHeight"
                  :WindGustKmph="WindGustKmph"
                  :waterTemp="waterTemp"
                  :ultraViolet="ultraViolet"
                  :wavePeriods="wavePeriods"
                  :swellHeight="swellHeight"
                  :windDir="windDir"
                  :tempC="tempC"
                  :fullDate="fullDate"
                />
              </div>
            </div>
          </div>
          <div class="tile is-child">
            <div class="tile is-parent is-vertical">
              <div class="tile is-child">
                <!-- Day selector -->
                <div class="columns is-mobile">
                  <div
                    class="column"
                    v-for="(day, index) in week"
                    :key="index"
                    @click="changeDay(index)"
                  >
                    <div class="columns is-gapless has-text-centered is-multiline">
                      <div class="column is-full">
                        <div
                          :class="{'has-background-secondary': selectedDay == index, 'has-background-primary': selectedDay != index}"
                          style="max-height:0.7em;height:0.5em;border-radius:15%"
                        ></div>
                      </div>
                      <div class="column is-full">
                        <p
                          class="title is-5 is-size-6-mobile"
                          :class="{'has-text-secondary': selectedDay == index, 'has-text-primary': selectedDay != index }"
                        >{{index === 0 ? 'HOJE' : day.date}}</p>
                      </div>
                      <div class="column is-full">
                        <p
                          class="subtitle is-size-7-mobile"
                          :class="{'has-text-secondary': selectedDay == index, 'has-text-primary': selectedDay != index }"
                        >{{day.weekDay}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tile is-child">
                <div class="columns is-multiline">
                  <div class="column is-9" style="padding-bottom:0px">
                    <tabs @selectionChanged="selectedChartChange($event)" />
                  </div>
                  <div class="column is-full" style="padding-top:0px">
                    <apexchart width="100%" type="bar" :options="barOptions" :series="selectedData"></apexchart>
                  </div>
                </div>
                <!-- Chart -->
              </div>
            </div>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child is-5">
            <!-- Tide -->
            <div class="tile is-parent is-vertical" style="padding-top:0.32rem">
              <div class="tile-is-child">
                <div class="columns is-gapless is-mobile">
                  <div class="column">
                    <img src="@/assets/icons/new_wave.svg" alt />
                  </div>
                  <div class="column is-6">
                    <p class="title is-5 has-text-centered">TÁBUA DE MARÉ</p>
                  </div>
                  <div class="column">
                    <img src="@/assets/icons/new_wave.svg" alt />
                  </div>
                </div>
              </div>
              <div class="tile-is-child">
                <apexchart
                  width="100%"
                  height="100"
                  type="area"
                  :options="areaOptions"
                  :series="tideData"
                ></apexchart>
              </div>
            </div>
          </div>

          <div class="tile is-child">
            <div class="columns">
              <div class="column is-8">
                <div class="columns is-multiline">
                  <div class="column is-full">
                    <div class="columns is-vcentered is-centered is-mobile">
                      <div class="column is-1 is-flex is-horizontal-end" style="padding-right:0px">
                        <figure class="image is-24x24">
                          <img src="@/assets/icons/star.svg" alt />
                        </figure>
                      </div>
                      <div
                        class="column is-9 has-text-centered"
                        style="padding-left:0px;padding-right:0px"
                      >
                        <p class="title is-5">MELHORES DO DIA</p>
                      </div>
                      <div class="column is-1 is-flex is-horizontal-start" style="padding-left:0px">
                        <figure class="image is-24x24">
                          <img src="@/assets/icons/star.svg" alt />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div class="column is-full">
                    <div class="columns is-mobile">
                      <div
                        class="column is-flex is-horizontal-center"
                        v-for="time in topThree"
                        :key="time.time"
                      >
                        <div
                          class="has-text-centered is-flex is-horizontal-center"
                          :class="time.highest ?  'best-secondary':  'best-primary'"
                        >
                          <div>
                            <p class="title is-6">{{time.time}}</p>
                            <p class="subtitle is-6">{{`${time.waveHeight}m`}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="columns is-mobile has-text-centered-mobile">
                  <div class="column">
                    <div class="tile is-parent is-vertical">
                      <div class="tile is-child">
                        <div class="columns is-multiline">
                          <div
                            class="column is-full is-gapless is-horizontal-center is-flex"
                            style="padding-top:0px;padding-bottom:0px;"
                          >
                            <figure class="image is-32x32">
                              <img src="@/assets/icons/dawn.svg" alt />
                            </figure>
                          </div>
                          <div
                            class="column is-full is-gapless has-text-centered"
                            style="padding-top:0px;"
                          >
                            <p class="subtitle is-6">{{sunrise}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="tile is-child">
                        <div class="columns is-multiline">
                          <div
                            class="column is-full is-horizontal-center is-flex"
                            style="padding-bottom:0px;"
                          >
                            <figure class="image is-32x32">
                              <img src="@/assets/icons/twilight.svg" alt />
                            </figure>
                          </div>
                          <div class="column is-full has-text-centered" style="padding-top:0px;">
                            <p class="subtitle is-6" style="padding-bottom:0px">{{sunset}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="tile is-parent is-vertical" style="padding-top:0px">
                      <div class="tile is-child">
                        <div class="columns is-multiline is-gapless">
                          <div class="column is-full is-horizontal-center is-flex">
                            <figure class="image is-32x32">
                              <img src="@/assets/icons/humidity.svg" alt />
                            </figure>
                          </div>
                          <div class="column is-full has-text-centered">
                            <p class="subtitle is-6" style="padding-top:0.5rem;">{{humidity}}</p>
                          </div>
                        </div>
                      </div>
                      <div class="tile is-child is-horizontal-center is-flex">
                        <div class="comment has-text-centered">
                          <p style="padding:0.22rem"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ForecastHud from "../components/ForecastHud";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";

import core from "../mixins/core";
import { mapState, mapActions } from "vuex";

var moment = require("moment");
const WEEK_DAYS = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

export default {
  components: {
    ForecastHud,
    SearchBar,
    Tabs
  },
  mixins: [core],
  created() {
    const local_lat = localStorage.getItem("lat");
    const local_lng = localStorage.getItem("lng");
    if (local_lat !== null && local_lng !== null) {
      const loading = this.$buefy.loading.open();
      this.getNearestSpot({ lat: local_lat, lng: local_lng }).then(() => {
        console.log(this.currentSpot);
        const lat = this.currentSpot.lat;
        const lng = this.currentSpot.lng;
        Promise.all([
          this.getWeather({ lat, lng }),
          this.getForecast({ lat, lng, hourTick: 1 })
        ])
          .then(() => loading.close())
          .catch(() => loading.close());
      });
    } else if (this.days.length === 0) {
      const loading = this.$buefy.loading.open();
      this.selectLastSpotAdded().then(() => {
        const lat = this.currentSpot.lat;
        const lng = this.currentSpot.lng;
        Promise.all([
          this.getWeather({ lat, lng }),
          this.getForecast({ lat, lng, hourTick: 1 })
        ])
          .then(() => loading.close())
          .catch(() => loading.close());
      });
    }
  },
  methods: {
    ...mapActions([
      "selectLastSpotAdded",
      "getForecast",
      "getWeather",
      "getNearestSpot"
    ]),
    selectedChartChange(index) {
      this.selectedChart = index;
    },
    spotSelected() {
      const loading = this.$buefy.loading.open();
      const lat = this.currentSpot.lat;
      const lng = this.currentSpot.lng;
      Promise.all([
        this.getWeather({ lat, lng }),
        this.getForecast({ lat, lng, hourTick: 1 })
      ])
        .then(() => loading.close())
        .catch(() => loading.close());
    }
  },
  computed: {
    ...mapState(["currentSpot"]),
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
      return [{ name: "Altura da maré (metros)", data: this.tideHourSeries }];
    },
    topThree() {
      const waveSeries = this.waveHeightData[0].data.map(element => {
        return {
          time: element[0],
          waveHeight: element[1]
        };
      });

      let topThree = waveSeries
        .sort((first, second) => first.waveHeight < second.waveHeight)
        .slice(0, 3);

      topThree = topThree.map((point, index) =>
        Object.assign(point, { highest: index === 0 })
      );

      topThree.sort((first, second) => first.time > second.time);

      topThree = topThree.map(point =>
        Object.assign(point, { time: moment(point.time).format("HH[h]mm") })
      );

      return topThree;
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
        return [new Date(tide.tideDateTime).getTime(), tide.tideHeight_mt];
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
          enabled: true
        },

        markers: {
          size: 0,
          style: "hollow"
        },
        xaxis: {
          type: "datetime"
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