import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'

Vue.config.productionTip = false//忽略提示

new Vue({
  render: h => h(App),
  components:{
    App//注册组件
  },
  template:'<App/>',
  router//配置路由器
}).$mount('#app')
