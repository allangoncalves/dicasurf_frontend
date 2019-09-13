import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
var moment = require("moment");

Vue.use(Vuex);

const weather_api = axios.create({
  baseURL: "https://api.worldweatheronline.com/premium/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default new Vuex.Store({
  state: {
    days: [],
    currentData: {},
    currentTime: null
  },
  mutations: {
    setDays(state, days) {
      state.days = days;
    },
    setCurrentData(state, data){
      state.currentData = data;
    },
    setCurrentTime(state){
      state.currentTime = moment();
    }
  },
  actions: {
    getForecast({ commit }, payload) {
      weather_api
        .get("/marine.ashx", {
          params: {
            key: process.env.VUE_APP_SECRET,
            q: `${payload.lat},${payload.lng}`,
            tide: "yes",
            format: "json"
          }
        })
        .then(res => {
          commit("setDays", res.data.data.weather);

          commit("setCurrentData", )

        });
    }
  }
});
