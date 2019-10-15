import {DICA_API} from "@/services/dica";

export default {
  namespaced: true,
  state: {
    homeCarousel: []
  },
  mutations: {
    setHomeCarousel(state, homeCarousel) {
      state.homeCarousel = homeCarousel;
    }
  },
  actions: {
    getHomeData({ commit }) {
      return DICA_API.get(`homepage/`).then(res => {
        commit("setHomeCarousel", res.data[0].carousel);
      });
    }
  }
};
