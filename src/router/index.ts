import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import {
  Folder,
  DataAnalysis,
  Wallet,
  List,
  Document,
  House
} from '@element-plus/icons-vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/entry/login' },
  { path: '/entry', redirect: '/entry/login' },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    meta: {
      label: '数据可视化',
      icon: ''
    },
    children: [
      {
        path: '/landing',
        component: () => import('../views/home/children/Landing.vue'),
        meta: {
          label: '首页',
          icon: House
        }
      },
      {
        path: '/modules',
        component: () => import('../views/home/children/Modules.vue'),
        meta: {
          label: '模组',
          icon: Folder
        }
      },
      {
        path: '/sample',
        component: () => import('../views/home/children/Sample.vue'),
        meta: {
          label: '测试',
          icon: Folder
        }
      },
      {
        path: '/account',
        component: () => import('../views/home/children/User.vue'),
        meta: {
          label: '账号',
          icon: Document
        },
        children: [
          {
            path: '/account/accountList',
            component: () => import('../views/home/children/AccountList.vue'),
            meta: {
              label: '账号一览'
            }
          },
          {
            path: '/account/newAccount',
            component: () => import('../views/home/children/NewAccount.vue'),
            meta: {
              label: '新增账号'
            }
          },
          {
            path: '/account/update',
            component: () => import('../views/home/children/UserUpdate.vue'),
            meta: {
              label: '更新'
            }
          }
        ]
      }
      // {
      //   path: 'user',
      //   component: () => import('../views/home/children/User.vue'),
      //   meta: {
      //     label: '用户',
      //     icon: Document
      //   },
      //   children: [
      //     {
      //       path: '/user/list',
      //       component: () => import('../views/home/children/UserList.vue'),
      //       meta: {
      //         label: '列表'
      //       }
      //     },
      //     {
      //       path: '/user/update',
      //       component: () => import('../views/home/children/UserUpdate.vue'),
      //       meta: {
      //         label: '更新'
      //       }
      //     }
      //   ]
      // }
    ]
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
