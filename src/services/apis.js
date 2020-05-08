import {Get} from "./index";
import qs from 'qs'
import {getSign, lastRecord} from "../utils";
export const apiRoot='http://jinhuang.test.hbbeisheng.com' //'http://jinhuang.test.hbbeisheng.com' //http://www.jinhuang.com
export const payRedirectUrl='http://jinhuang.test.hbbeisheng.com/wap'
export const getParams=(body)=>{
  const timestamp = new Date().getTime().toString().substr(0,11)
  const {hasToken,...other}=body
  const {uid,token}=lastRecord()

  const params = hasToken?{...other,timestamp,uid,token}:{...other,timestamp}
  const sign = getSign(params)
  return {...params,timestamp,sign}
}
//登录
function getSplash(body,options) {
  return Get(`${apiRoot}/api/publics/lunbotu?${qs.stringify(getParams(body))}`,options)
}
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

function createCartOrder(body,options) {
  return Get(`${apiRoot}/api/index/cartOrder?${qs.stringify(getParams(body))}`,options)
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
function buyGold(body,options) {
  return Get(`${apiRoot}/api/index/buyGold?${qs.stringify(getParams(body))}`,options)
}
function sellOut(body,options) {
  return Get(`${apiRoot}/api/index/sellOut?${qs.stringify(getParams(body))}`,options)
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
function deleteAddress(body,options) {
  return Get(`${apiRoot}/api/index/delAddrs?${qs.stringify(getParams(body))}`,options)
}
function addAddress(body,options) {
  return Get(`${apiRoot}/api/index/addAddrs?${qs.stringify(getParams(body))}`,options)
}
function getAddressList(body,options) {
  return Get(`${apiRoot}/api/index/receivingGoodsAddrs?${qs.stringify(getParams(body))}`,options)
}
function getAddressListData(body,options) {
  return Get(`${apiRoot}/api/index/arealist?${qs.stringify(getParams(body))}`,options)
}
function getAddressDetail(body,options) {
  return Get(`${apiRoot}/api/index/addrDetail?${qs.stringify(getParams(body))}`,options)
}
function getOrderDetail(body,options) {
  return Get(`${apiRoot}/api/index/orderDetail?${qs.stringify(getParams(body))}`,options)
}
function getMyOrderList(body,options) {
  return Get(`${apiRoot}/api/index/myOrders?${qs.stringify(getParams(body))}`,options)
}
function confirmOrder(body,options) {
  return Get(`${apiRoot}/api/index/sureRece?${qs.stringify(getParams(body))}`,options)
}
function delOrder(body,options) {
  return Get(`${apiRoot}/api/index/delOrder?${qs.stringify(getParams(body))}`,options)
}
function cancelOrder(body,options) {
  return Get(`${apiRoot}/api/index/cancelOrder?${qs.stringify(getParams(body))}`,options)
}
function commentProduct(body,options) {
  return Get(`${apiRoot}/api/index/commentProduct?${qs.stringify(getParams(body))}`,options)
}
function getEtList(body,options) {
  return Get(`${apiRoot}/api/index/etlist?${qs.stringify(getParams(body))}`,options)
}
function confirmEt(body,options) {
  return Get(`${apiRoot}/api/index/myEt?${qs.stringify(getParams(body))}`,options)
}
function getRechargeData(body,options) {
  return Get(`${apiRoot}/api/index/toRecharge?${qs.stringify(getParams(body))}`,options)
}
function getRechargeList(body,options) {
  return Get(`${apiRoot}/api/index/rechargelist?${qs.stringify(getParams(body))}`,options)
}
function getTixianData(body,options) {
  return Get(`${apiRoot}/api/index/toTixian?${qs.stringify(getParams(body))}`,options)
}
function getTixianList(body,options) {
  return Get(`${apiRoot}/api/index/tixianlist?${qs.stringify(getParams(body))}`,options)
}
function tixian(body,options) {
  return Get(`${apiRoot}/api/index/tixian?${qs.stringify(getParams(body))}`,options)
}
function getDistrCenterData(body,options) {
  return Get(`${apiRoot}/api/index/fx_index?${qs.stringify(getParams(body))}`,options)
}
function getDistrTeam(body,options) {
  return Get(`${apiRoot}/api/index/commissionTeam?${qs.stringify(getParams(body))}`,options)
}
function getMyInviteCode(body,options) {
  return Get(`${apiRoot}/api/index/myInviteCode?${qs.stringify(getParams(body))}`,options)
}
function getIntegralDetail(body,options) {
  return Get(`${apiRoot}/api/index/integralDetail?${qs.stringify(getParams(body))}`,options)
}
function getCommissionDetail(body,options) {
  return Get(`${apiRoot}/api/index/commissionDetail?${qs.stringify(getParams(body))}`,options)
}
function geBanksListData(body,options) {
  return Get(`${apiRoot}/api/index/banks?${qs.stringify(getParams(body))}`,options)
}
function getMyBanksList(body,options) {
  return Get(`${apiRoot}/api/index/myBankAccounts?${qs.stringify(getParams(body))}`,options)
}
function addBankAccount(body,options) {
  return Get(`${apiRoot}/api/index/addBankAccount?${qs.stringify(getParams(body))}`,options)
}
function getCustomerPhones(body,options) {
  return Get(`${apiRoot}/api/index/customerPhones?${qs.stringify(getParams(body))}`,options)
}
function getActionDetail(body,options) {
  return Get(`${apiRoot}/api/index/actionDetail?${qs.stringify(getParams(body))}`,options)
}
function setParams(body,options) {
  return Get(`${apiRoot}/api/index/setParams?${qs.stringify(getParams(body))}`,options)
}
function getMyParams(body,options) {
  return Get(`${apiRoot}/api/index/myParams?${qs.stringify(getParams(body))}`,options)
}
function getVIPListData(body,options) {
  return Get(`${apiRoot}/api/index/rechargeIndex?${qs.stringify(getParams(body))}`,options)
}
function addFeedback(body,options) {
  return Get(`${apiRoot}/api/index/ideaFeedback?${qs.stringify(getParams(body))}`,options)
}
function addIdCardAuth(body,options) {
  return Get(`${apiRoot}/api/index/idCardAuth?${qs.stringify(getParams(body))}`,options)
}
function getAllMoney(body,options) {
  return Get(`${apiRoot}/api/index/ziCan?${qs.stringify(getParams(body))}`,options)
}

export  const serviceApi =  {
  getSplash,
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
  getNewsList,
  getNewsDetails,
  profile,
  updateInfo,
  addAddress,
  updateAddress,
  deleteAddress,
  getAddressList,
  getAddressDetail,
  getAddressListData,
  getBuyCenterList,
  getGoldGoods,
  buyGold,
  sellOut,
  getOrderDetail,
  getMyOrderList,
  getRechargeData,
  getRechargeList,

  confirmOrder,
  delOrder,
  cancelOrder,
  commentProduct,
  getEtList,
  confirmEt,
  getTixianData,
  getTixianList,
  tixian,
  getDistrCenterData,
  getDistrTeam,
  getMyInviteCode,
  getIntegralDetail,
  getCommissionDetail,
  geBanksListData,
  getMyBanksList,
  addBankAccount,
  getCustomerPhones,
  getActionDetail,
  setParams,
  getMyParams,
  getVIPListData,
  addFeedback,
  addIdCardAuth,
  getAllMoney

}
