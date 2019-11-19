import Vue from "vue";
import Buefy from "buefy";
import App from "@/App.vue";
import router from "@/router";
import store from "./store";
import VueApexCharts from "vue-apexcharts";
import VueCarousel from "@chenfengyuan/vue-carousel";
import { mapMutations } from "vuex";
import vSelect from "vue-select";
import * as VueGoogleMaps from 'vue2-google-maps';
import 'vue-select/dist/vue-select.css';


Vue.component("v-select", vSelect);

Vue.component(VueCarousel.name, VueCarousel);

Vue.component("apexchart", VueApexCharts);

Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultContainerElement: "#content"
});

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_KEY,
    libraries: ['places', 'geometry'], // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then set installComponents to 'false'.
  //// If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})

new Vue({
  router,
  store,
  created() {
    if (localStorage.getItem("isLogged") === true) {
      const token = localStorage.getItem("token");
      this.setToken(token);
      const first_name = localStorage.getItem("first_name");
      const last_name = localStorage.getItem("last_name");
      const email = localStorage.getItem("email");
      const pk = localStorage.getItem("pk");
      const username = localStorage.getItem("username");
      this.setUser({ first_name, last_name, email, pk, username });
      this.setLogged(true);
    }
  },
  methods: {
    ...mapMutations("auth", ["setUser", "setToken", "setLogged"])
  },
  render: h => h(App)
}).$mount("#app");
