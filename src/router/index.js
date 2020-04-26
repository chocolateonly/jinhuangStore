import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/tab/home'
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
    },
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {//进入页面时 滚动到最顶部
    return { x: 0, y: 0}
  }
})

export default router
