import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/entry/login' },
  { path: '/entry', redirect: '/entry/login' },
  {
    path: '/entry',
    name: 'entry',
    component: () => import('../views/login/index.vue'),
    children: [
      { path: 'login', component: () => import('../views/login/login.vue') },
      {
        path: 'register',
        component: () => import('../views/login/register.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
