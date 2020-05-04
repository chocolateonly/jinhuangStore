import md5 from 'md5'
import _ from 'lodash'

//加密
const encrypt_key = '60f57f752a5bdcae0898d4487f7a73b2';//token加密key

export const getSign=(data)=>{
  let data1 = sortObj(data);
  const sign = makeSign(data1);
  return sign;
}

function sortObj(obj) {
  const sdic=Object.keys(obj).sort().reverse();
  const return_obj = {};
  for(let ki in sdic){
    return_obj[sdic[ki]] = obj[sdic[ki]];
  }
  return return_obj;
}

function makeSign(obj){
  let string = '';
  for (let i in obj) {
    if(!_.isEmpty(obj[i])){
      string += ( i + '=' + obj[i] + '&' );
    }
  }
  const en_string = string + encrypt_key;
  const  sign = md5(en_string);
  return sign;
}
