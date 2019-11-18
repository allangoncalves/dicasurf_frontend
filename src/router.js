import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      meta: { transitionName: "slide", id: 1 }
    },
    {
      path: "/tabua",
      name: "full_forecast",
      component: () =>
        import(/* webpackChunkName: "forecast" */ "@/views/FullForecast.vue"),
      meta: { transitionName: "slide", id: 2 }
    },
    {
      path: "/picos",
      name: "spot",
      component: () =>
        import(/* webpackChunkName: "spot" */ "@/views/Spot.vue"),
      meta: { transitionName: "slide", id: 3 }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
    },
    {
      path: "/boaonda",
      name: "goodwave",
      component: () =>
        import(/* webpackChunkName: "goodwave" */ "@/views/GoodWave.vue"),
      meta: { transitionName: "slide", id: 4 }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
    },
    {
      path: "/parceiros",
      name: "partners",
      component: () =>
        import(/* webpackChunkName: "goodwave" */ "@/views/Partners.vue"),
      meta: { transitionName: "slide", id: 5 }
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
    },
    {
      path: "/news",
      name: "news",
      component: () =>
        import(/* webpackChunkName: "news" */ "@/views/News.vue"),
      meta: { transitionName: "slide", id: 6 }
    },
    {
      path: "/news/:id",
      name: "single_new",
      component: () =>
        import(/* webpackChunkName: "news" */ "@/views/SingleNew.vue"),
      props: (post) => ({
        post
      }) ,
      meta: { transitionName: "fade", id: 7 }
    },
    {
      path: "/faleconosco",
      name: "talk_to_us",
      component: () =>
        import(/* webpackChunkName: "talktous" */ "@/views/TalkToUs.vue"),
      meta: { transitionName: "slide", id: 900 }
    },
    {
      path: "/quemsomos",
      name: "who_we_are",
      component: () =>
        import(/* webpackChunkName: "whoweare" */ "@/views/WhoWeAre.vue"),
      meta: { transitionName: "slide", id: 950 }
    },
    {
      path: "/equipe",
      name: "our_team",
      component: () =>
        import(/* webpackChunkName: "ourteam" */ "@/views/OurTeam.vue"),
      meta: { transitionName: "slide", id: 960 }
    },
    {
      path: "/nova",
      name: "account_creation",
      component: () =>
        import(/* webpackChunkName: "create" */ "@/views/AccountCreation.vue"),
      meta: { transitionName: "slide", id: 1000 }
    }
  ]
});
