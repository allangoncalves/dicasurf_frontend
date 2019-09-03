import Vue from "vue";
import Router from "vue-router";
import Spot from "@/views/Spot";
import Home from "@/views/Home";
import News from "@/views/News";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/picos",
      name: "Spot",
      component: Spot
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/news",
      name: "News",
      component: News
    }
  ]
});
