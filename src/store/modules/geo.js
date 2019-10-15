import { DICA_API } from "@/services/dica";

export default {
  namespaced: true,
  state: {
    states: [],
    cities: [],
    spots: [],
    currentState: null,
    currentCity: null,
    currentSpot: null
  },
  mutations: {
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
      commit("setCurrentCity", city);
      let spots = await dispatch("getSpots", {
        state_id: state.id,
        city_id: city.id
      });
      commit("setCurrentSpot", spots.find(spot => spot.id === nearest_spot.id));
    }
  }
};
