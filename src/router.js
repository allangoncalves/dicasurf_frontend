import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      meta: { transitionName: "slide", id: 1 }
    },
    {
      path: "/previsao",
      name: "Full Forecast",
      component: () => import(/* webpackChunkName: "forecast" */ "@/views/FullForecast.vue"),
      meta: { transitionName: "slide", id: 2 }
    },
    {
      path: "/picos",
      name: "Spot",
      component: () => import(/* webpackChunkName: "spot" */ "@/views/Spot.vue"),
      meta: { transitionName: "slide", id: 3 },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      
    },
    {
      path: "/news",
      name: "News",
      component: () => import(/* webpackChunkName: "news" */ "@/views/News.vue"),
      meta: { transitionName: "slide", id: 4 }
    },
    {
      path: "/nova",
      name: "Account Creation",
      component: () => import(/* webpackChunkName: "create" */ "@/views/AccountCreation.vue"),
      meta: { transitionName: "slide", id: 5 }
    }
  ]
});
