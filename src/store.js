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
    user: {
      email: "",
      first_name: "",
      last_name: "",
      pk: null,
      username: ""
    },
    isLogged: false,
    days: [],
    weatherDays: [],
    currentData: {},
    states: [],
    cities: [],
    spots: [],
    currentState: null,
    currentCity: null,
    currentSpot: null,
    homeCarousel: [],
    posts: []
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
    },
    setHomeCarousel(state, homeCarousel) {
      state.homeCarousel = homeCarousel;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setUser(state, user) {
      localStorage.setItem("first_name", user.first_name);
      localStorage.setItem("last_name", user.last_name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("pk", user.pk);
      localStorage.setItem("username", user.username);
      state.user = user;
    },
    setToken(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
    },
    setLogged(state, isLogged) {
      state.isLogged = isLogged;
    }
  },
  actions: {
    login({ commit }, payload) {
      return DICA_API.post("auth/login/", payload)
        .then(res => {
          commit("setToken", res.data.token);
          commit("setUser", res.data.user);
          localStorage.setItem("isLogged", true);
          commit("setLogged", true);
        })
        .catch(err => Promise.reject(err.response.data));
    },
    logout({ commit }) {
      localStorage.setItem("isLogged", false);
      commit("setUser", {
        email: "",
        first_name: "",
        last_name: "",
        pk: null,
        username: ""
      });
      commit("setToken", "");
      commit("setLogged", false);
    },
    registerUser({}, payload) {
      return DICA_API.post("users/", payload);
    },
    getForecast({ commit }, payload) {
      return EXTERNAL_API.get("/marine.ashx", {
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
      return EXTERNAL_API.get("/weather.ashx", {
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
    getPosts({ commit }) {
      return DICA_API.get("/posts").then(res => {
        commit("setPosts", res.data);
      });
    },
    getStates({ commit }) {
      return DICA_API.get("/states").then(res => {
        commit("setStates", res.data);
      });
    },
    async getCities({ commit }, state_id) {
      return await DICA_API.get(`/states/${state_id}/cities`).then(res => {
        commit("setCities", res.data);
        return res.data;
      });
    },
    async getSpots({ commit }, payload) {
      return await DICA_API.get(
        `/states/${payload.state_id}/cities/${payload.city_id}/spots`
      ).then(res => {
        commit("setSpots", res.data);
        return res.data;
      });
    },
    getCityData({ commit }, payload) {
      return DICA_API.get(`/states/${1}/cities/${payload.id}`).then(res => {
        commit("setCurrentCity", res.data);
      });
    },
    getSpotData({ commit }, payload) {
      return DICA_API.get(
        `/states/${1}/cities/${payload.cityId}/spots/${payload.id}`
      ).then(res => {
        commit("setCurrentSpot", res.data);
      });
    },
    getStateData({ commit }, id) {
      return DICA_API.get(`/states/${id}`).then(res => {
        commit("setCurrentState", res.data);
      });
    },
    getHomeData({ commit }) {
      return DICA_API.get(`homepage/`).then(res => {
        commit("setHomeCarousel", res.data[0].carousel);
      });
    },
    async getNearestSpot({ commit, dispatch }, payload) {
      let nearest_spot = await DICA_API.get("nearest", {
        params: {
          lat: payload.lat,
          lng: payload.lng
        }
      }).then(res => {
        return res.data[0];
      });
      let state = nearest_spot.city.state;
      commit("setCurrentState", state);
      let cities = await dispatch("getCities", state.id);
      let city = cities.find(city => city.id === nearest_spot.city.id);
      commit(
        "setCurrentCity",
        city
      );
      let spots = await dispatch("getSpots",{state_id:state.id , city_id: city.id});
      commit("setCurrentSpot", spots.find(spot => spot.id === nearest_spot.id));
    },
    selectLastSpotAdded({ commit, state }) {
      return DICA_API.get(`/states/${1}/cities/`).then(res => {
        const cities = res.data;
        commit("setCities", cities);
        commit("setCurrentCity", cities[cities.length - 1]);
        return DICA_API.get(
          `/states/${1}/cities/${state.currentCity.id}/spots`
        ).then(res => {
          const spots = res.data;
          commit("setSpots", spots);
          commit("setCurrentSpot", spots[spots.length - 1]);
        });
      });
    }
  }
});
