import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/entry/login' },
  { path: '/entry', redirect: '/entry/login' },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
