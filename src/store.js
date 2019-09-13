import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
var moment = require("moment");

Vue.use(Vuex);

const EXTERNAL_API = axios.create({
  baseURL: process.env.VUE_APP_EXTERNAL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default new Vuex.Store({
  state: {
    days: [],
    weatherDays: [],
    currentData: {},
    currentTime: null
  },
  mutations: {
    setDays(state, days) {
      state.days = days;
    },
    setWeatherDays(state, days){
      state.weatherDays = days;
    },
    setCurrentTime(state){
      state.currentTime = moment();
    }
  },
  actions: {
    getForecast({ commit }, payload) {
      EXTERNAL_API
        .get("/marine.ashx", {
          params: {
            key: process.env.VUE_APP_SECRET,
            q: `${payload.lat},${payload.lng}`,
            tp: payload.hourTick,
            tide: "yes",
            format: "json"
          }
        })
        .then(res => {
          commit("setDays", res.data.data.weather);
        });
    },
    getWeather({ commit }, payload) {
      EXTERNAL_API
        .get("/weather.ashx", {
          params: {
            key: process.env.VUE_APP_SECRET,
            q: `${payload.lat},${payload.lng}`,
            num_of_days: 7, 
            format: "json"
          }
        })
        .then(res => {
          commit("setWeatherDays", res.data.data.weather);
        });
    }
  }
});
