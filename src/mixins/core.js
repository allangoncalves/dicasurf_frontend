import { mapState } from "vuex";
var moment = require("moment");
const WEEK_DAYS = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
export default {
  data(){
    return {
      selectedDay: 0,
    }
  },
  methods: {
    findCurrentElementIndex(hourly_forecast) {
      const index = hourly_forecast.findIndex(period => {
        return this.currentTime.hours() <= this.parseHour(period.time);
      });
      return index === -1 ? hourly_forecast.length - 1 : index;
    },
    parseHour(hour) {
      return parseInt(hour / 100);
    },
    changeDay(day) {
      this.selectedDay = day;
    }
  },
  computed: {
    ...mapState(["days", "weatherDays", "currentTime"]),
    tides() {
      return this.days[this.selectedDay].tides[0].tide_data;
    },
    tideSeries() {
      return [{ name: "Altura da maré (metros)", data: this.tideHours }];
    },
    tideHours() {
      return this.tides.map(tide => {
        return [new Date(tide.tideDateTime).getTime(), tide.tideHeight_mt];
      });
    },
    sunrise() {
      return moment(
        this.days[this.selectedDay].astronomy[0].sunrise,
        "hh:mm A"
      ).format("HH[h]mm");
    },
    sunset() {
      return moment(
        this.days[this.selectedDay].astronomy[0].sunset,
        "hh:mm A"
      ).format("HH[h]mm");
    },
    waveHeight() {
      return this.currentMarineData.sigHeight_m;
    },
    waterTemp() {
      return this.currentMarineData.waterTemp_C;
    },
    wavePeriods() {
      return this.currentMarineData.swellPeriod_secs;
    },

    ultraViolet() {
      return this.currentWeatherData.uvIndex;
    },

    WindGustKmph() {
      return this.currentWeatherData.WindGustKmph;
    },

    humidity() {
      return `${this.currentWeatherData.humidity}%`;
    },
    currentMarineData() {
      const index = this.findCurrentElementIndex(
        this.days[this.selectedDay].hourly
      );
      return this.days[this.selectedDay].hourly[index];
    },
    currentWeatherData() {
      const index = this.findCurrentElementIndex(
        this.weatherDays[this.selectedDay].hourly
      );
      return this.weatherDays[this.selectedDay].hourly[index];
    },
    topThree() {
      // )
      const waveSeries = this.waveHeightSeries[0].data.map(element => {
        console.log(element);
        console.log(typeof element[0]);
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

      topThree.sort((first, second) => {
        first.time > second.time;
      });

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
    waveHeightSeries() {
      return [{ name: "Altura das ondas (metros)", data: this.waveHeights }];
    },
    waveHeights() {
      const date = this.days[this.selectedDay].date;
      return this.days[this.selectedDay].hourly.map(day => {
        return [
          new Date(date).setHours(this.parseHour(day.time), 0, 0, 0),
          Number(day.sigHeight_m)
        ];
      });
    }
  }
};
