// import Vue from "vue";
// import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/MainView.vue";
import About from "../views/AboutView.vue";
import Contact from "../views/ContactView.vue";
import Reference from "../views/ReferenceView.vue";
import Movie from "../views/MovieView.vue";
import Portfolio from "../views/PortfolioView.vue";
import Youtube from "../views/YoutubeView.vue";

// Vue.useAttrs(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/reference",
    name: "Reference",
    component: Reference,
  },
  {
    path: "/movie",
    name: "Movie",
    component: Movie,
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: Youtube,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
