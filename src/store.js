import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const EXTERNAL_API = axios.create({
  baseURL: process.env.VUE_APP_EXTERNAL_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

const DICA_API = axios.create({
  baseURL: process.env.VUE_APP_DICA_API,
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
    states: [],
    cities: [],
    spots: [],
    currentState: null,
    currentCity: null,
    currentSpot: null
  },
  mutations: {
    setDays(state, days) {
      state.days = days;
    },
    setWeatherDays(state, days) {
      state.weatherDays = days;
    },
    setStates(state, states) {
      state.states = states;
    },
    setCities(state, cities) {
      state.cities = cities;
    },
    setSpots(state, spots) {
      state.spots = spots;
    },
    setCurrentState(state, currentState) {
      state.currentState = currentState;
    },
    setCurrentCity(state, city) {
      state.currentCity = city;
    },
    setCurrentSpot(state, spot) {
      state.currentSpot = spot;
    }
  },
  actions: {
    getForecast({ commit }, payload) {
      EXTERNAL_API.get("/marine.ashx", {
        params: {
          key: process.env.VUE_APP_SECRET,
          q: `${payload.lat},${payload.lng}`,
          tp: payload.hourTick,
          tide: "yes",
          format: "json"
        }
      }).then(res => {
        commit("setDays", res.data.data.weather);
      });
    },
    getWeather({ commit }, payload) {
      EXTERNAL_API.get("/weather.ashx", {
        params: {
          key: process.env.VUE_APP_SECRET,
          q: `${payload.lat},${payload.lng}`,
          num_of_days: 7,
          format: "json"
        }
      }).then(res => {
        commit("setWeatherDays", res.data.data.weather);
      });
    },
    getStates({ commit }) {
      DICA_API.get("/states").then(res => {
        commit("setStates", res.data);
      });
    },
    getCities({ commit }) {
      DICA_API.get(`/states/${1}/cities`).then(res => {
        commit("setCities", res.data);
      });
    },
    getSpots({ commit }, payload) {
      DICA_API.get(`/states/${1}/cities/${payload.id}/spots`).then(res => {
        commit("setSpots", res.data);
      });
    },
    getCityData({ commit }, payload) {
      DICA_API.get(`/states/${1}/cities/${payload.id}`).then(res => {
        commit("setCurrentCity", res.data);
      });
    },
    getSpotData({ commit }, payload) {
      DICA_API.get(
        `/states/${1}/cities/${payload.cityId}/spots/${payload.id}`
      ).then(res => {
        commit("setCurrentSpot", res.data);
      });
    },
    getStateData({ commit }, payload) {
      DICA_API.get(`/states/${1}`).then(res => {
        commit("setCurrentState", res.data);
      });
    },
    getLastSpotAdded({ commit, state }) {
      DICA_API.get(`/states/${1}/cities/`).then(res => {
        commit("setCurrentCity", res.data[res.data.length - 1]);
        DICA_API.get(`/states/${1}/cities/${state.currentCity.id}/spots`).then(
          res => {
            commit("setCurrentSpot", res.data[res.data.length - 1]);
          }
        );
      });
    }
  }
});
