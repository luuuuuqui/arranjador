import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import ArrangementsView from "../views/ArrangementsView.vue"
import ContactView from "../views/ContactView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Início",
      hideHeader: true
    },
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import("../views/AboutView.vue");
    },
    meta: {
      title: "Sobre Mim",
      hideHeader: false
    },
  },
  {
    path: "/arrangements",
    name: "arrangements",
    component: function () {
      return import("../views/ArrangementsView.vue");
    },
    meta: {
      title: "Arranjos",
      hideHeader: true
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: function () {
      return import("../views/ContactView.vue");
    },
    meta: {
      title: "Contato",
      hideHeader: false
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
