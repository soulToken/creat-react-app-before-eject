const formRule = {
  //大于0可保留两位小数
  validateNumber(rule, value, callback){
    var reg = /^\d+(\.\d{1,2})?$/ 
    if (value&&!reg.test(value)||value == 0) {
       return callback(new Error('请输入大于0的数字(可保留两位小数)'))
    } else {
      return callback()
    }
  },
  //0-100的数字(可保留两位小数)
  validatePercent(rule, value, callback){
    let reg = /^(\d|[1-9]\d)(\.\d{1,2})?$/ 
    if (value&&!reg.test(value)) {
      if(Number(value)===100){
        return callback()
      }else{
        return callback(new Error('请输入0-100的数字(可保留两位小数)'))
      }
    } else {
      return callback()
    }
  },
  //电话号码正则
  checkPhone(rule, value, callback) {
    if (!value) {
      return callback(new Error('手机号不能为空'));
    } else {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
      console.log(reg.test(value));
      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入正确的手机号'));
      }
    }
  },
  //大于0的整数
  validateInteger(rule, value, callback){
    let reg = /^\+?[1-9]\d*$/
    if (value&&!reg.test(value)) {
      return callback(new Error('请输入大于0的整数'))
    } else {
      return callback()
    }
  },
  //效验http或https
  validateLink(rule, value, callback){
    let reg = /(http|https):\/\/([\w.]+\/?)\S*/
    if (value&&!reg.test(value)) {
      return callback(new Error('请输入正确的链接地址'))
    } else {
      return callback()
    }
  },
  //效验不能输入中文
  validateNoChinese(rule, value, callback){
    let reg =/[\u4E00-\u9FA5]/g
    if (value&&reg.test(value)) {
      return callback(new Error('不能输入中文'))
    } else {
      return callback()
    }
  }
}

export default formRule
