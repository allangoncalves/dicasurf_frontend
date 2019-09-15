import { mapState } from "vuex";
var moment = require("moment");
export default {
  data() {
    return {
      selectedDay: 0,
      currentTime: moment()
    };
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
    ...mapState(["days", "weatherDays"]),
    tides() {
      return this.days[this.selectedDay].tides[0].tide_data;
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
    swellHeight(){
      return this.currentMarineData.swellHeight_m;
    },
    ultraViolet() {
      return this.currentWeatherData.uvIndex;
    },
    WindGustKmph() {
      return this.currentWeatherData.WindGustKmph;
    },
    windDir(){
      return this.currentWeatherData.winddir16Point;
    },
    humidity() {
      return `${this.currentWeatherData.humidity}%`;
    },
    tempC(){
      return this.currentWeatherData.tempC;
    },
    date(){
      return this.days[this.selectedDay].date;
    },
    fullDate(){
      return moment(`${this.date} ${this.currentTime.format('HH:mm')}`);
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
    
  }
};
