import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Gerenciador from '../views/Gerenciador.vue'
import Bemvindo from '../views/BemVindo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/login/configuracoes',
    name: 'GerenciadorPerfis',
    component: Gerenciador,
  },
  {
    path: '/bem-vindo',
    name: 'Bemvindo',
    component: Bemvindo,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router