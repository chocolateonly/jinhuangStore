import md5 from 'md5'

//加密
const encrypt_key = '60f57f752a5bdcae0898d4487f7a73b2';//token加密key

export const getSign = (data) => {
    let data1 = sortObj(data);
    const sign = makeSign(data1);
    return sign;
}

function sortObj(obj) {
    const sdic = Object.keys(obj).sort().reverse();
    const return_obj = {};
    for (let ki in sdic) {
        return_obj[sdic[ki]] = obj[sdic[ki]];
    }
    return return_obj;
}

function makeSign(obj) {
    let string = '';
    for (let i in obj) {
        string += (i + '=' + encodeURIComponent(obj[i]) + '&');
    }

    const en_string = string + encrypt_key;
    console.log(en_string)
    const sign = md5(en_string);
    return sign;
}


//storage
export const StorageKey='BS_JINHUANG_USER';

export const lastRecord = (() => { // 上一把的状态
    let data = localStorage.getItem(StorageKey);
    if (!data) {
        return false;
    }
    try {
        if (window.btoa) {
            data = atob(data);
        }
        data = decodeURIComponent(data);
        data = JSON.parse(data);
    } catch (e) {
        if (window.console || window.console.error) {
            window.console.error('读取记录错误:', e);
        }
        return false;
    }
    return data;
})();
export const storageData=info =>{
            let data  = JSON.stringify(info);
            data = encodeURIComponent(data);
            if (window.btoa) {
                data = btoa(data);
            }
            localStorage.setItem(StorageKey, data);
};
