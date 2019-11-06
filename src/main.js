import Vue from "vue";
import Buefy from "buefy";
import App from "@/App.vue";
import router from "@/router";
import store from "./store";
import VueApexCharts from "vue-apexcharts";
import VueCarousel from "@chenfengyuan/vue-carousel";
import { mapMutations } from "vuex";
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';

Vue.component("v-select", vSelect);

Vue.component(VueCarousel.name, VueCarousel);

Vue.component("apexchart", VueApexCharts);

Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultContainerElement: "#content"
});

Vue.config.productionTip = false;

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
