import {Get} from "./index";
import qs from 'qs'
import {getSign, lastRecord} from "../utils";
const apiRoot='http://www.jinhuang.com' //'http://jinhuang.test.hbbeisheng.com'
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

}
