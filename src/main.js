import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueApexCharts from 'vue-apexcharts';

Vue.component('apexchart', VueApexCharts)

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
