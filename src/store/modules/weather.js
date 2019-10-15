import { EXTERNAL_API } from "@/services/external";

export default {
  namespaced: true,
  state: {
    weatherDays: []
  },
  mutations: {
    setWeatherDays(state, days) {
      state.weatherDays = days;
    }
  },
  actions: {
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
    }
  }
};
