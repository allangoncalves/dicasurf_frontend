import Vue from "vue";
import Router from "vue-router";
import Spot from "@/views/Spot";
import Home from "@/views/Home";
import News from "@/views/News";
import FullForecast from "@/views/FullForecast";
import AccountCreation from "@/views/AccountCreation";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: { transitionName: "slide", id: 1 }
    },
    {
      path: "/previsao",
      name: "Full Forecast",
      component: FullForecast,
      meta: { transitionName: "slide", id: 2 }
    },
    {
      path: "/picos",
      name: "Spot",
      component: Spot,
      meta: { transitionName: "slide", id: 3 }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/news",
      name: "News",
      component: News,
      meta: { transitionName: "slide", id: 4 }
    },
    {
      path: "/nova",
      name: "Account Creation",
      component: AccountCreation,
      meta: { transitionName: "slide", id: 5 }
    }
  ]
});
