import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'//做适配
import './validate'
import './mockData/mockServe'//引入mockServe.js
import store from './store'

Vue.config.productionTip = false//忽略提示
// Vue.user

new Vue({
  render: h => h(App),
  components:{
    App//注册组件
  },
  template:'<App/>',
  router,//配置路由器
  store
}).$mount('#app')
