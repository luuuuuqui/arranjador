import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Início" },
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import("../views/AboutView.vue");
    },
    meta: { title: "Sobre Mim" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
