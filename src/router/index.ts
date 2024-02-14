import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import { RouterPaths } from '@/constants/routs'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouterPaths.HOME,
      name: RouterPaths.HOME,
      component: Home
    }
  ]
})

export default router
