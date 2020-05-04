import {Get} from "./index";
import qs from 'qs'
import {getSign} from "../utils";
const apiRoot='http://jinhuang.test.hbbeisheng.com'
const getparams=(body)=>{
  const timestamp = new Date().getTime().toString().substr(0,11)
  const params = {...body,timestamp}
  const sign = getSign(params)
  return {...body,timestamp,sign}
}

function register (body,options) {
  return Get(`${apiRoot}/api/publics/register?${qs.stringify(getparams(body))}`,options)
}
function sendMsg (body,options) {
  return Get(`${apiRoot}/api/publics/sendMsg?${qs.stringify(getparams(body))}`,options)
}
function getUserAgreement (body,options) {
  return Get(`${apiRoot}/api/publics/userAgreement?${qs.stringify(getparams(body))}`,options)
}
export  const serviceApi =  {
  getUserAgreement,
  register,
  sendMsg
}
