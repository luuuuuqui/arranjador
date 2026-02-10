import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Início",
      useBlurHeader: true
    },
  },
  {
    path: "/sobre",
    name: "about",
    component: function () {
      return import("../views/AboutView.vue");
    },
    meta: {
      title: "Sobre Mim",
      useBlurHeader: false
    },
  },
  {
    path: "/arranjos",
    name: "arrangements",
    alias: ["/arranjos"],
    component: function () {
      return import("../views/ArrangementsView.vue");
    },
    meta: {
      title: "Arranjos",
      useBlurHeader: true
    },
  },
  {
    path: "/arranjos/:id(\\d+)",
    name: "arrangement-detail",
    alias: ["/arranjos/:id(\\d+)"],
    component: function () {
      return import("../views/ArrangementDetailView.vue");
    },
    props: true,
    meta: {
      title: "Arranjo",
      useBlurHeader: false
    },
  },
  {
    path: "/contato",
    name: "contact",
    component: function () {
      return import("../views/ContactView.vue");
    },
    meta: {
      title: "Contato",
      useBlurHeader: true
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title || "oioioi") + " - Lucas Duarte";
  next();
});

export default router;
