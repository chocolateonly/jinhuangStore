import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/welcome'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import(/* webpackChunkName: "about" */ '../views/Welcome.vue')
    },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
