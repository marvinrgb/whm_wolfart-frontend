import { createRouter, createWebHistory } from 'vue-router';
import TheDashboard from '../views/TheDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TheDashboard
    }
  ]
})

export default router
