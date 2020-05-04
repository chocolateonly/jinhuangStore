import {Get} from "./index";
import qs from 'qs'
import {getSign, lastRecord} from "../utils";
const apiRoot='http://jinhuang.test.hbbeisheng.com'
const getParams=(body)=>{
  const timestamp = new Date().getTime().toString().substr(0,11)
  const {hasToken,...other}=body
  const {uid,token}=lastRecord
  const params = hasToken?{...other,timestamp,uid,token}:{...other,timestamp}
  const sign = getSign(params)
  return {...body,timestamp,sign}
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

export  const serviceApi =  {
  getUserAgreement,
  register,
  sendMsg,
  forgot,
  login,

  getHomeData,
  getLastPrice
}
