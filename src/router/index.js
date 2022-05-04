import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/LayoutIndex.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/UserLogin.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
