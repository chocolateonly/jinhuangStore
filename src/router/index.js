import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/login' //  /tab/home
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "register" */ '../views/login/Register.vue')
    },
    {
      path: '/contract',
      name: 'Contract',
      component: () => import(/* webpackChunkName: "contract" */ '../views/login/Contract.vue')
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: () => import(/* webpackChunkName: "forgot" */ '../views/login/Forgot.vue')
    },

    // production
    {
      path: '/productionList',
      name: 'ProductionList',
      component: () => import(/* webpackChunkName: "productionList" */ '../views/product/ProductList')
    },
    {
      path: '/productionDetails',
      name: 'ProductionDetails',
      component: () => import(/* webpackChunkName: "productionDetails" */ '../views/product/ProductionDetails')
    },
    {
      path: '/payOrder',
      name: 'PayOrder',
      component: () => import(/* webpackChunkName: "payOrder" */ '../views/product/PayOrder')
    },

    //tab
    {
      path: '/tab',
      component: ()=> import(/* webpackChunkName: "tab" */ '../views/TabView.vue'),
      children:[
        {
          path:'home',
          name:'Home',
          component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        },
        {
          path: 'news',
          name: 'News',
          component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
        },
        {
          path: 'buyCenter',
          name: 'BuyCenter',
          component: () => import(/* webpackChunkName: "buyCenter" */ '../views/BuyCenter.vue')
        },
        {
          path: 'mine',
          name: 'Mine',
          component: () => import(/* webpackChunkName: "Mine" */ '../views/Mine.vue'),
          meta: { requiresAuth: true }  //先去判断用户授权
        }
      ]
    },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {//进入页面时 滚动到最顶部
    return { x: 0, y: 0}
  }
})
router.beforeEach(async (to, from, next) => {
  //验证是否登录
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const res=await localStorage.getItem('BS_JH_USERINFO')
    console.log(res)
    console.log(to)
    console.log(from)
    // this route requires auth, check if logged in
    // if not, redirect to login page.
/*    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {*/
      next()
   /* }*/
  } else {
    next() // make sure to always call next()!
  }
})
export default router
