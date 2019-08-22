//封装axios
import axios from 'axios'
import qs from 'qs'

// Add a request interceptor
axios.interceptors.request.use( config=> { 
  const {method,data} =config
  //处理post请求的参数
  if(method.toUpperCase()==='POST' && data instanceof Object){
    config.data=qs.stringify(data)
  }
  return config;
})

// Add a response interceptor
axios.interceptors.response.use( response=> {
  //返回response中的data数据, 这样请求成功的数据就是data了
  return response.data
},  error =>{//统一处理错误信息
  console.log('请求发送失败',error.message)
  //中断promise链
  return new Promise(()=>{}) 

})

export default axios
  
