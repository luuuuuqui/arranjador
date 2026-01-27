import { createRouter, createWebHistory } from "vue-router"; // <-- troquei aqui
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import("../views/AboutView.vue");
    },
  },
  // Adicione suas rotas do header aqui também:
  // {
  //   path: "/arranjos",
  //   name: "arranjos",
  //   component: () => import("../views/ArranjosView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
