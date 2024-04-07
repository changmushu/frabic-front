import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'test',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'home',
      component: () => import('../layout/index.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../views/home/HomePage.vue')
        },
        {
          path: 'userInfo',
          component: () => import('../views/userInfo/UserInfoPage.vue')
        },
        {
          path: 'user/userManage',
          component: () => import('../views/userManage/UserManagePage.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/LoginPage.vue')
    },
    // {
    //   path: '127.0.0.1:8080',
    //   name: 'fabric'
    // },
    {
      path: '/404',
      component: () => import('../views/404.vue'),
      hidden: true
    },
    { path: '/:catchAll(.*)', redirect: '/404', hidden: true }
  ]
})

// router.beforeEach(async (to, from) => {
//   if (
//     !isAuthenticated &&
//     // ❗️ 避免无限重定向
//     to.name !== 'Login'
//   ) {
//     // 将用户重定向到登录页面
//     return { name: 'Login' }
//   }
// })
router.beforeEach(async (to, from) => {
  // NProgress.start()

  const userStore = useUserStore()
  // 1.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由并放行到登陆页
  if (to.path === 'login') {
    // if (userStore.token) return next(from.fullPath)
    // return next()
    console.log('yes!')
  }

  if (
    !userStore.token &&
    // ❗️ 避免无限重定向
    to.name !== 'Login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'Login' }
  }

  // // 2.判断访问页面是否在路由白名单(不需要登陆)地址中，如果存在直接放行
  // if (ROUTER_WHITE_LIST.includes(to.path)) return next()

  // 3.判断是否有 Token，没有token跳转到登陆页面并且携带原目标路径
  // if (!userStore.token) {
  //   return next({ path: LOGIN_URL, query: { redirect: to.fullPath } })
  // }

  // const authStore = useAuthStore()
  // authStore.setRouteName(to.name as string)
  // // 4.如果没有菜单列表，就重新请求菜单列表并添加动态路由
  // if (!authStore.authRouterList.length) {
  //   await initDynamicRouter()
  //   return next({ ...to, replace: true })
  // }
  // // 5.上述条件都不满足，直接放行
  // return next()
})

export default router
