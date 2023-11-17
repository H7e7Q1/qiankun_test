import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vue3-vite',
      name: 'vue3',
      component: HomeView

    },
    {
      path: '/vue2-webpack',
      name: 'vue2',
      component: HomeView

    },
    {
      path: '/react',
      name: 'react',
      component: HomeView
    },
  ]
})

export default router
