import {Get} from "./index";
import qs from 'qs'
import {getSign, lastRecord} from "../utils";
const apiRoot='http://www.jinhuang.com' //'http://jinhuang.test.hbbeisheng.com' //http://www.jinhuang.com
export const getParams=(body)=>{
  const timestamp = new Date().getTime().toString().substr(0,11)
  const {hasToken,...other}=body
  const {uid,token}=lastRecord
  const params = hasToken?{...other,timestamp,uid,token}:{...other,timestamp}
  const sign = getSign(params)
  return {...params,timestamp,sign}
}
//登录
function register (body,options) {
  return Get(`${apiRoot}/api/publics/register?${qs.stringify(getParams(body))}`,options)
}
function sendMsg (body,options) {
  return Get(`${apiRoot}/api/publics/sendMsg?${qs.stringify(getParams(body))}`,options)
}
function getUserAgreement (body,options) {
  return Get(`${apiRoot}/api/publics/userAgreement?${qs.stringify(getParams(body))}`,options)
}
function forgot (body,options) {
  return Get(`${apiRoot}/api/publics/forgetPassword?${qs.stringify(getParams(body))}`,options)
}
function login (body,options) {
  return Get(`${apiRoot}/api/publics/login?${qs.stringify(getParams(body))}`,options)
}
//商城
function getHomeData (body,options) {
  return Get(`${apiRoot}/api/publics/index?${qs.stringify(getParams(body))}`,options)
}
function getLastPrice (body,options) {
  return Get(`${apiRoot}/api/publics/getLastPrice`,options)
}
function getAllProducts (body,options) {
  return Get(`${apiRoot}/api/publics/allProduct?${qs.stringify(getParams(body))}`,options)
}
function getProductDetails (body,options) {
  return Get(`${apiRoot}/api/publics/productDetail?${qs.stringify(getParams(body))}`,options)
}
function getAllComments (body,options) {
  return Get(`${apiRoot}/api/publics/allComments?${qs.stringify(getParams(body))}`,options)
}

function getProductSpecs (body,options) {
  return Get(`${apiRoot}/api/publics/productSpecs?${qs.stringify(getParams(body))}`,options)
}
function getPriceBySpecs (body,options) {
  return Get(`${apiRoot}/api/publics/getPriceBySpecs?${qs.stringify(getParams(body))}`,options)
}
function buyNow(body,options) {
  return Get(`${apiRoot}/api/index/buyNow?${qs.stringify(getParams(body))}`,options)
}
function addShoppingCart(body,options) {
  return Get(`${apiRoot}/api/index/addShoppingCart?${qs.stringify(getParams(body))}`,options)
}
function getShoppingCartList(body,options) {
  return Get(`${apiRoot}/api/index/shoppingCartList?${qs.stringify(getParams(body))}`,options)
}
function addGoodsNum(body,options) {
  return Get(`${apiRoot}/api/index/addNum?${qs.stringify(getParams(body))}`,options)
}
function cutGoodsNum(body,options) {
  return Get(`${apiRoot}/api/index/cutNum?${qs.stringify(getParams(body))}`,options)
}
function deleteGoods(body,options) {
  return Get(`${apiRoot}/api/index/delShoppingCart?${qs.stringify(getParams(body))}`,options)
}
//todo
function createCartOrder(body,options) {
  return Get(`${apiRoot}/api/index/cartOrder?${qs.stringify(getParams(body))}`,options)
}
function pay(body,options) {
  return Get(`${apiRoot}/api/index/surePay?${qs.stringify(getParams(body))}`,options)
}
//news
function getNewsList(body,options) {
  return Get(`${apiRoot}/api/index/news?${qs.stringify(getParams(body))}`,options)
}
function getNewsDetails(body,options) {
  return Get(`${apiRoot}/api/index/newsDetail?${qs.stringify(getParams(body))}`,options)
}
//buycenter
function getBuyCenterList(body,options) {
  return Get(`${apiRoot}/api/index/deal?${qs.stringify(getParams(body))}`,options)
}
function getGoldGoods(body,options) {
  return Get(`${apiRoot}/api/index/goldGoods?${qs.stringify(getParams(body))}`,options)
}
//me
function profile(body,options) {
  return Get(`${apiRoot}/api/index/mine?${qs.stringify(getParams(body))}`,options)
}
function updateInfo(body,options) {
  return Get(`${apiRoot}/api/index/updMine?${qs.stringify(getParams(body))}`,options)
}
function updateAddress(body,options) {
  return Get(`${apiRoot}/api/index/editAddrs?${qs.stringify(getParams(body))}`,options)
}
function addAddress(body,options) {
  return Get(`${apiRoot}/api/index/addAddrs?${qs.stringify(getParams(body))}`,options)
}
function getAddressList(body,options) {
  return Get(`${apiRoot}/api/index/receivingGoodsAddrs?${qs.stringify(getParams(body))}`,options)
}

export  const serviceApi =  {
  getUserAgreement,
  register,
  sendMsg,
  forgot,
  login,

  getHomeData,
  getLastPrice,
  getAllProducts,
  getProductDetails,
  getAllComments,
  getProductSpecs,
  getPriceBySpecs,
  buyNow,
  addShoppingCart,
  getShoppingCartList,
  addGoodsNum,
  cutGoodsNum,
  deleteGoods,
  createCartOrder,
  pay,
  getNewsList,
  getNewsDetails,
  profile,
  updateInfo,
  addAddress,
  updateAddress,
  getAddressList,
  getBuyCenterList,
  getGoldGoods

}
