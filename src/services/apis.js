import {Get} from "./index";
import qs from 'qs'
const apiRoot='http://jinhuang.test.hbbeisheng.com/'

function getUserAgreement (body,options) {
  return Get(`${apiRoot}/api/publics/userAgreement?${qs.stringify(body)}`,options)
}

export  const serviceApi =  {
  getUserAgreement
}