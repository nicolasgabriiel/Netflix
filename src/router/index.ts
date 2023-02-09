import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  { name: "home", path: "/home", component: () => HomeView },
  { name: "login", path: "/about", component: () => AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
