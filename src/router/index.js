import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Quran',
    name: 'Quran',
    component: () => import(/* webpackChunkName: "kematian" */ '../views/QuranView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
