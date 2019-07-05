import axios from 'axios';


let requestLoding = new Object;
let loadingNum = 0;


const service = axios.create({
//   baseURL: baseUrl, // api 的 base_url
  timeout: 30000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    
    config.data = JSON.stringify(config.data);
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    
    // config.headers.authorization =localStorage.getItem("jwt")
    // config.headers.appid =localStorage.getItem("uid")
    if(config.noModal){
      loadingNum = loadingNum + 1;
    }else{
    //   requestLoding = Loading.service();
      loadingNum = loadingNum + 1;
    }
    
    return config;
  },
  error => {
    console.log('requestErr' + error); // for debug
    hide();
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    hide();
    if(response.data.meta.success){
      return response.data;
    }else{
      let rmeta = response.data.meta;
      if(rmeta.code == 1007 || rmeta.code == 1004) {
        // 在这里清除一下token
        // localStorage.removeItem('jwt')
        console.log('非法登录')
        setTimeout(() => {
         window.location.reload()
        }, 500)
      }else if(rmeta.code == 1002) {
        // 用户名密码错误
        console.log(rmeta.msg)
        return
      }else if(rmeta.code == 1008) {
        //在这里清除一下token
        // localStorage.removeItem('jwt')
        console.log('该账号已在其他地方登录')
        setTimeout(() => {
          window.location.reload()
        }, 500)
      }else if(rmeta.code == 1006) {
        // 在这里清除一下token
        // localStorage.removeItem('jwt')
        console.log('登录状态已失效，请重新登录')
        setTimeout(() => {
          // window.location.reload()
        }, 500)
      }else if (rmeta.code == 403) {
        console.log('权限不足')
        return
      }else{
        console.log(rmeta.msg)
        return 
      }
    }
  },
  error => {
    let message = error.response ? error.response.data.message : '网络异常';
    // const errStatus = errormeta.response.status;
    // console.log(errStatus,'errStatus')
    // if(errStatus == 401){
    //   // vue.$routermeta.push({
    //   //   path:'/home'
    //   // })
    // }

    hide();
  
    
    return Promise.reject(error);
  }
);

const hide = () => {
  loadingNum = loadingNum - 1;
  if (loadingNum == 0 ) {
    // requestLoding.close();
  }
}
export default service;



