import Vue from "vue";
import Vuex from "vuex";
import website from "@/store/modules/website";
import auth from "@/store/modules/auth";
import geo from "@/store/modules/geo";
import news from "@/store/modules/news";
import marine from "@/store/modules/marine";
import weather from "@/store/modules/weather";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    website,
    auth,
    news,
    geo,
    marine,
    weather
  }
});
