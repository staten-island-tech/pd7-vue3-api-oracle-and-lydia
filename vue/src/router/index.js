import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/PieChart',
      name: 'PieChart',
      component: () => import('../views/PieChart.vue')
    },
    {
      path: '/BarChart',
      name: 'BarChart',
      component: () => import('../views/BarChart.vue')
    },
    {
      path: '/DoughnutChart',
      name: 'DoughnutChart',
      component: () => import('../views/DoughnutChart.vue')
    }
    
  ]
})

export default router
