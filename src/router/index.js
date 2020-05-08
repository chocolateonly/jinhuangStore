import Vue from 'vue'
import VueRouter from 'vue-router'
import {lastRecord} from "../utils";
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
      component: () => import(/* webpackChunkName: "productionList" */ '../views/product/ProductList'),
      meta: { requiresAuth: true }
    },
    {
      path: '/productionDetails/:id',
      name: 'ProductionDetails',
      component: () => import(/* webpackChunkName: "productionDetails" */ '../views/product/ProductionDetails'),
      meta: { requiresAuth: true }
    },
    {
      path: '/comment/:id',
      name: 'Comment',
      component: () => import(/* webpackChunkName: "productionDetails" */ '../views/product/Comment'),
      meta: { requiresAuth: true }
    },
    {
      path: '/payOrder/:orderId',
      name: 'PayOrder',
      component: () => import(/* webpackChunkName: "payOrder" */ '../views/product/PayOrder'),
      meta: { requiresAuth: true }
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: () => import(/* webpackChunkName: "shoppingCart" */ '../views/product/ShoppingCart'),
      meta: { requiresAuth: true }
    },
    //  news
    {
      path: '/newsDetails/:id',
      name: 'NewsDetails',
      component: () => import(/* webpackChunkName: "newsDetails" */ '../views/news/NewsDetails'),
      meta: { requiresAuth: true }
    },
      //buycenter
    {
      path: '/goldBuy',
      name: 'GoldBuy',
      component: () => import(/* webpackChunkName: "goldBuy" */ '../views/buycenter/GoldBuy'),
      meta: { requiresAuth: true }
    },
    //mine
    {
      path: '/profile',
      name: 'Profile',
      component: () => import(/* webpackChunkName: "profile" */ '../views/mine/top/Profile'),
      meta: { requiresAuth: true }
    },
    //top
    {
      path: '/getCash',
      name: 'GetCash',
      component: () => import(/* webpackChunkName: "getCash" */ '../views/mine/top/GetCash'),
      meta: { requiresAuth: true }
    },
    {
      path: '/getCashRecord',
      name: 'GetCashRecord',
      component: () => import(/* webpackChunkName: "getCashRecord" */ '../views/mine/top/GetCashRecord'),
      meta: { requiresAuth: true }
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: () => import(/* webpackChunkName: "recharge" */ '../views/mine/top/Recharge'),
      meta: { requiresAuth: true }
    },
    {
      path: '/rechargeCenter',
      name: 'RechargeCenter',
      component: () => import(/* webpackChunkName: "rechargeCenter" */ '../views/mine/top/RechargeCenter'),
      meta: { requiresAuth: true }
    },
    {
      path: '/rechargeList',
      name: 'RechargeList',
      component: () => import(/* webpackChunkName: "rechargeList" */ '../views/mine/top/RechargeList'),
      meta: { requiresAuth: true }
    },
    {
      path: '/setParams',
      name: 'SetParams',
      component: () => import(/* webpackChunkName: "setParams" */ '../views/mine/top/SetParams'),
      meta: { requiresAuth: true }
    },
    {
      path: '/scoreDetails',
      name: 'ScoreDetails',
      component: () => import(/* webpackChunkName: "scoreDetails" */ '../views/mine/top/ScoreDetails'),
      meta: { requiresAuth: true }
    },
    //fun
    {
      path: '/idCard',
      name: 'IdCard',
      component: () => import(/* webpackChunkName: "idCard" */ '../views/mine/fun/IdCard'),
      meta: { requiresAuth: true }
    },
    {
      path: '/bankCardList',
      name: 'BankCardList',
      component: () => import(/* webpackChunkName: "bankCardList" */ '../views/mine/fun/BankCardList'),
      meta: { requiresAuth: true }
    },
    {
      path: '/addBankCard',
      name: 'AddBankCard',
      component: () => import(/* webpackChunkName: "addBankCard" */ '../views/mine/fun/AddBankCard'),
      meta: { requiresAuth: true }
    },
    {
      path: '/distributionCenter',
      name: 'DistributionCenter',
      component: () => import(/* webpackChunkName: "distributionCenter" */ '../views/mine/fun/DistributionCenter'),
      meta: { requiresAuth: true }
    },

    {
      path: '/distributionTeam',
      name: 'DistributionTeam',
      component: () => import(/* webpackChunkName: "distributionTeam" */ '../views/mine/fun/DistributionTeam'),
      meta: { requiresAuth: true }
    },
    {
      path: '/entrustTrading',
      name: 'EntrustTrading',
      component: () => import(/* webpackChunkName: "entrustTrading" */ '../views/mine/fun/EntrustTrading'),
      meta: { requiresAuth: true }
    },
    {
      path: '/entrustTradingRule',
      name: 'EntrustTradingRule',
      component: () => import(/* webpackChunkName: "entrustTradingRule" */ '../views/mine/fun/EntrustTradingRule'),
      meta: { requiresAuth: true }
    },
    {
      path: '/moneyDetails',
      name: 'MoneyDetails',
      component: () => import(/* webpackChunkName: "moneyDetails" */ '../views/mine/fun/MoneyDetails'),
      meta: { requiresAuth: true }
    },
    {
      path: '/myQrCode',
      name: 'MyQrCode',
      component: () => import(/* webpackChunkName: "myQrCode" */ '../views/mine/fun/MyQrCode'),
      meta: { requiresAuth: true }
    },
    //order
    {
      path: '/myOrder/:id',
      name: 'MyOrder',
      component: () => import(/* webpackChunkName: "myOrder" */ '../views/mine/order/MyOrder'),
      meta: { requiresAuth: true }
    },
    {
      path: '/orderComment/:id',
      name: 'OrderComment',
      component: () => import(/* webpackChunkName: "orderComment" */ '../views/mine/order/OrderComment'),
      meta: { requiresAuth: true }
    },
    //service
    {
      path: '/addOrUpdateAddress/:id',
      name: 'AddOrUpdateAddress',
      component: () => import(/* webpackChunkName: "addOrUpdateAddress" */ '../views/mine/service/AddOrUpdateAddress'),
      meta: { requiresAuth: true }
    },
    {
      path: '/addressList',
      name: 'AddressList',
      component: () => import(/* webpackChunkName: "addressList" */ '../views/mine/service/AddressList'),
      meta: { requiresAuth: true }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "contact" */ '../views/mine/service/Contact'),
      meta: { requiresAuth: true }
    },
    {
      path: '/instructions',
      name: 'Instructions',
      component: () => import(/* webpackChunkName: "instructions" */ '../views/mine/service/Instructions'),
      meta: { requiresAuth: true }
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: () => import(/* webpackChunkName: "feedback" */ '../views/mine/service/Feedback'),
      meta: { requiresAuth: true }
    },
    //tab
    {
      path: '/tab',
      component: ()=> import(/* webpackChunkName: "tab" */ '../views/TabView.vue'),
      children:[
        {
          path:'home',
          name:'Home',
          component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'news',
          name: 'News',
          component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'buyCenter',
          name: 'BuyCenter',
          component: () => import(/* webpackChunkName: "buyCenter" */ '../views/BuyCenter.vue'),
          meta: { requiresAuth: true }
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
router.beforeEach( (to, from, next) => {
  // console.log('lastRecord.token--------------')
  // console.log(lastRecord().token)
  //验证是否登录
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!lastRecord().token) {
      next({
        path: '/login',
        //query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
export default router
