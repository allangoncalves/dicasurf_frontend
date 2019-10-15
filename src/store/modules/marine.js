import { EXTERNAL_API } from "@/services/external";

export default {
  namespaced: true,
  state: {
    days: []
  },
  mutations: {
    setDays(state, days) {
      state.days = days;
    }
  },
  actions: {
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
    }
  }
};
