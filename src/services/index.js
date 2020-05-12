import {Toast} from "vant";
import {payRedirectUrl} from "./apis";
import {StorageKey} from "../utils";

const defaultConfig = {
  headers: {'Content-Type': 'application/json; charset=UTF-8'},
};
const {headers} = defaultConfig;

export async function Post(url, body, options = {}) {
  try {
    let res = await fetch(url, {
      method: 'POST',
      headers: {...headers, ...options},
      body,
    });
    res = await getStatus(res);
    res = await parseJson(res);
    res = await handleRes(res);
    return res;
  } catch (e) {
    await Promise.reject({msg: e.message,code:e.code});
  }
}

export async function Get(url) {
  try {
    let res = await fetch(url, {
      method: 'GET'
    });
    res = await getStatus(res);
    res = await parseJson(res);
    res = await handleRes(res);
    return res;
  } catch (e) {
    await Promise.reject({msg: e.message,code:e.code});
  }
}

export async function Put(url, body, options = {}) {
  try {
    let res = await fetch(url, {
      method: 'PUT',
      headers: {...headers, ...options},
      body,
    });

    res = await getStatus(res);
    res = await parseJson(res);
    res = await handleRes(res);
    return res;
  } catch (e) {
    await Promise.reject({msg: e.message,code:e.code});
  }
}

export async function Delete(url, options = {}) {
  try {
    let res = await fetch(url, {
      method: 'DELETE',
      headers: {...headers, ...options},
    });

    res = await getStatus(res);
    res = await parseJson(res);
    res = await handleRes(res);
    return res;
  } catch (e) {
    await Promise.reject({msg: e.message,code:e.code});
  }

}

function getStatus(res) {
  //console.log(res);
  return {isOk: res.ok, status: res.status, res};
}

async function parseJson(res) {
  if (res.status === 500) {
    throw {message: resJson.msg};
  }
  const resJson = await res.res.json();
  console.log('from api-----------------');
  console.log(resJson);
  //alert('error???:'+JSON.stringify(resJson))
  if (resJson.code === '400') throw {message: resJson.desc,code:resJson.code};
  if (resJson.code === '401'){ //throw {message:resJson.desc,code:resJson.code}
    window.location.replace(`${payRedirectUrl}/#/login`)
    //window.location.replace(`http://localhost:8080/#/login`)
    localStorage.removeItem(StorageKey)
    localStorage.removeItem('BS_JINHUANG_IP')
    Toast(resJson.desc)
    //throw {message: resJson.desc};
  }
  return {isOk: res.isOk, data: resJson};

}

function handleRes(res) {
  if (res.isOk) {
    return res.data;
  }
  throw {...res.data,message: res.data.desc}
}

