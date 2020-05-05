import Vue from 'vue'
import VueRouter from 'vue-router'
import {lastRecord} from "../utils";
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/contract' //  /tab/home
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
      path: '/productionDetails/:id',
      name: 'ProductionDetails',
      component: () => import(/* webpackChunkName: "productionDetails" */ '../views/product/ProductionDetails')
    },
    {
      path: '/comment/:id',
      name: 'Comment',
      component: () => import(/* webpackChunkName: "productionDetails" */ '../views/product/Comment')
    },
    {
      path: '/payOrder',
      name: 'PayOrder',
      component: () => import(/* webpackChunkName: "payOrder" */ '../views/product/PayOrder')
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: () => import(/* webpackChunkName: "shoppingCart" */ '../views/product/ShoppingCart')
    },
    //  news
    {
      path: '/newsDetails/:id',
      name: 'NewsDetails',
      component: () => import(/* webpackChunkName: "newsDetails" */ '../views/news/NewsDetails')
    },
      //buycenter
    {
      path: '/goldBuy',
      name: 'GoldBuy',
      component: () => import(/* webpackChunkName: "goldBuy" */ '../views/buycenter/GoldBuy')
    },
    //mine
    {
      path: '/profile',
      name: 'Profile',
      component: () => import(/* webpackChunkName: "profile" */ '../views/mine/top/Profile')
    },
    //top
    {
      path: '/getCash',
      name: 'GetCash',
      component: () => import(/* webpackChunkName: "getCash" */ '../views/mine/top/GetCash')
    },
    {
      path: '/getCashRecord',
      name: 'GetCashRecord',
      component: () => import(/* webpackChunkName: "getCashRecord" */ '../views/mine/top/GetCashRecord')
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: () => import(/* webpackChunkName: "recharge" */ '../views/mine/top/Recharge')
    },
    {
      path: '/rechargeCenter',
      name: 'RechargeCenter',
      component: () => import(/* webpackChunkName: "rechargeCenter" */ '../views/mine/top/RechargeCenter')
    },
    {
      path: '/rechargeList',
      name: 'RechargeList',
      component: () => import(/* webpackChunkName: "rechargeList" */ '../views/mine/top/RechargeList')
    },
    {
      path: '/setParams',
      name: 'SetParams',
      component: () => import(/* webpackChunkName: "setParams" */ '../views/mine/top/SetParams')
    },
    {
      path: '/scoreDetails',
      name: 'ScoreDetails',
      component: () => import(/* webpackChunkName: "scoreDetails" */ '../views/mine/top/ScoreDetails')
    },
    //fun
    {
      path: '/idCard',
      name: 'IdCard',
      component: () => import(/* webpackChunkName: "idCard" */ '../views/mine/fun/IdCard')
    },
    {
      path: '/bankCardList',
      name: 'BankCardList',
      component: () => import(/* webpackChunkName: "bankCardList" */ '../views/mine/fun/BankCardList')
    },
    {
      path: '/addBankCard',
      name: 'AddBankCard',
      component: () => import(/* webpackChunkName: "addBankCard" */ '../views/mine/fun/AddBankCard')
    },
    {
      path: '/distributionCenter',
      name: 'DistributionCenter',
      component: () => import(/* webpackChunkName: "distributionCenter" */ '../views/mine/fun/DistributionCenter')
    },

    {
      path: '/distributionTeam',
      name: 'DistributionTeam',
      component: () => import(/* webpackChunkName: "distributionTeam" */ '../views/mine/fun/DistributionTeam')
    },
    {
      path: '/entrustTrading',
      name: 'EntrustTrading',
      component: () => import(/* webpackChunkName: "entrustTrading" */ '../views/mine/fun/EntrustTrading')
    },
    {
      path: '/entrustTradingRule',
      name: 'EntrustTradingRule',
      component: () => import(/* webpackChunkName: "entrustTradingRule" */ '../views/mine/fun/EntrustTradingRule')
    },
    {
      path: '/moneyDetails',
      name: 'MoneyDetails',
      component: () => import(/* webpackChunkName: "moneyDetails" */ '../views/mine/fun/MoneyDetails')
    },
    {
      path: '/myQrCode',
      name: 'MyQrCode',
      component: () => import(/* webpackChunkName: "myQrCode" */ '../views/mine/fun/MyQrCode')
    },
    //order
    {
      path: '/myOrder/:id',
      name: 'MyOrder',
      component: () => import(/* webpackChunkName: "myOrder" */ '../views/mine/order/MyOrder')
    },
    {
      path: '/orderComment',
      name: 'OrderComment',
      component: () => import(/* webpackChunkName: "orderComment" */ '../views/mine/order/OrderComment')
    },
    //service
    {
      path: '/addOrUpdateAddress/:type',
      name: 'AddOrUpdateAddress',
      component: () => import(/* webpackChunkName: "addOrUpdateAddress" */ '../views/mine/service/AddOrUpdateAddress')
    },
    {
      path: '/addressList',
      name: 'AddressList',
      component: () => import(/* webpackChunkName: "addressList" */ '../views/mine/service/AddressList')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName: "contact" */ '../views/mine/service/Contact')
    },
    {
      path: '/instructions',
      name: 'Instructions',
      component: () => import(/* webpackChunkName: "instructions" */ '../views/mine/service/Instructions')
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: () => import(/* webpackChunkName: "feedback" */ '../views/mine/service/Feedback')
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
router.beforeEach( (to, from, next) => {
  //验证是否登录
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!lastRecord.token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
export default router
