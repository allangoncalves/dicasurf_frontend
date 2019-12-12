import { DICA_API } from "@/services/dica";

export default {
  namespaced: true,
  state: {
    homeCarousel: [],
    partnerCarousel: [],
    whoWeAreCarousel: []
  },
  mutations: {
    setHomeCarousel(state, homeCarousel) {
      state.homeCarousel = homeCarousel;
    },
    setPartnerCarousel(state, partnerCarousel) {
      state.partnerCarousel = partnerCarousel;
    },
    setWhoWeAreCarousel(state, whoWeAreCarousel){
      state.whoWeAreCarousel = whoWeAreCarousel;
    }
  },
  actions: {
    getHomeData({ commit }) {
      return DICA_API.get(`homepage/`).then(res => {
        commit("setHomeCarousel", res.data[0].carousel);
      });
    },
    getPartnerData({ commit }) {
      return DICA_API.get("/partners/").then(res => {
        commit("setPartnerCarousel", res.data[0].carousel);
      });
    },
    getWhoWeAreData({commit}){
      return DICA_API.get("/whoweare/").then(res => {
        commit("setWhoWeAreCarousel", res.data[0].carousel);
      })
    }
  }
};
