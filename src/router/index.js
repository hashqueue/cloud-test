import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/LayoutView.vue'

/**
 * 私有路由表
 */
const privateRoutes = [
  {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'user'
    },
    children: [
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage/UserManage.vue'),
        meta: {
          title: 'userManage',
          icon: 'box'
        }
      },
      {
        path: '/user/role',
        component: () => import('@/views/role-list/RoleList.vue'),
        meta: {
          title: 'roleList',
          icon: 'box'
        }
      },
      {
        path: '/user/permission',
        component: () => import('@/views/permission-list/PermissionList.vue'),
        meta: {
          title: 'permissionList',
          icon: 'box'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/user-info/UserInfo.vue'),
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import/ImportView.vue'),
        meta: {
          title: 'excelImport'
        }
      }
    ]
  },
  {
    path: '/article',
    component: layout,
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'box'
    },
    children: [
      {
        path: '/article/ranking',
        component: () => import('@/views/article-ranking/ArticleRanking.vue'),
        meta: {
          title: 'articleRanking',
          icon: 'box'
        }
      },
      {
        path: '/article/:id',
        component: () => import('@/views/article-detail/ArticleDetail.vue'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        component: () => import('@/views/article-create/ArticleCreate.vue'),
        meta: {
          title: 'articleCreate',
          icon: 'box'
        }
      },
      {
        path: '/article/editor/:id',
        component: () => import('@/views/article-create/ArticleCreate.vue'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/UserLogin.vue')
  },
  {
    path: '/',
    name: 'index',
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/ProfileView.vue'),
        meta: {
          title: 'profile',
          icon: 'box'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import(/* webpackChunkName: "error-page" */ '@/views/error-page/404View')
      },
      {
        path: '/401',
        name: '401',
        component: () => import(/* webpackChunkName: "error-page" */ '@/views/error-page/401View')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
