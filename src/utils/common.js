
export function setLocalStorage(name, value, timeout) {
  //默认有效期六个小时
  let now = Date.now();
  timeout = timeout ? now + timeout : now + 6 * 60 * 60 * 1000;
  value = Object.assign(value, {
    savedate: now,
    timeout: timeout
  });
  localStorage.setItem(name, JSON.stringify(value));
}

//获取信息有效期
export function getLocalStorage(name) {
	let data = localStorage.getItem(name);
  if (data && data != 'undefined') {
    data = JSON.parse(localStorage.getItem(name));
    if (data.timeout) {
      //默认有效期六个小时
      let now = Date.now();
      if (data.timeout < now) {
        return null;
      } else {
        return data;
      }
    } else {
      return data;
    }
  } else {
    return null;
  }
}
  //将时间戳转化为24H标准时间
export function changeTimestamp(values) {
    let date = new Date(values);
  
    let Y = date.getFullYear();
    let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let time = Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
    return time;
}
// 将字符串去重后并返回一个数组
export function filterRepeatStr(str) {
    let ar2 = str.split(',');
    let array = new Array();
    let j = 0;
    for (let i = 0; i < ar2.length; i++) {
      if ((array == '' || array.toString().match(new RegExp(ar2[i], 'g')) == null) && ar2[i] != '') {
        array[j] = ar2[i];
        array.sort();
        j++;
      }
    }
    return array;
}
// 处理语言
export function filtrelang(lang,itme) {
  let result = '';
  if(lang == 'zh'){
    result = itme.columnName
  }else{
    result = itme['columnName'+ 'En']
  }
  return result;
}
//动态设置文字头部和icon

export function SetTitleAndIcon(res){
  document.title = res || '银商代理系统';
  let linkIcon = document.getElementById('link-icon');
  linkIcon.href = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554379954127&di=cacf046336c864fa199f8a81c32f130a&imgtype=0&src=http%3A%2F%2Fwww.shinerayad.com%2Fupfile%2Fattached%2F2018251940254883365.jpg';
}
export function scrollTop(){
  let scrollObj = document.querySelector('html');
  // 滚动区域
  scrollObj.scrollTop = 0;
}

export function getHash(){
  const hash = window.location.hash;
  const result = hash.replace('#','')
  return result;
}


export function getStatus(){ //0 未登录or未注册，1 注册未申请，2开户成功，3审核中，4审核失败
  let cust = getLocalStorage('cust'); 
  let result = 0;  
  if(cust){
    if(cust.custStatus == 1){
      result = 1;
    }else{
      if(cust.auditStatus == 4){
        result = 2;
      }else if(cust.auditStatus == 1 || cust.auditStatus == 2){
        result = 3;
      }else if(cust.auditStatus == 3){
        result = 4;
      }
    }
  }else{
    result = 0;
  }
  console.log(result,'result')
  return result;
}
// export function uploadImg($event){
//   let resultBase = null;
//   if(window.FileReader){
//       const imgDom = $event.target.files[0];
//       let reader = new FileReader();
//       reader.readAsDataURL(imgDom);
//       reader.onload=function(){
//         console.log("读取成功");
//         resultBase = reader.result;
//         console.log(resultBase,'resultBase')
//       }
//   }
//   return resultBase;
// }