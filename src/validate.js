import Vue from 'vue';
import VeeValidate from 'vee-validate'
import zh_CH from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate);


//提示信息本地化
VeeValidate.Validator.localize('zh_CH', {
  messages: zh_CH.messages,
  attributes: {
    myphone: "手机号"
  }
})
// 自定义验证规则，返回一个布尔值
VeeValidate.Validator.extend('phone', {
  getMessage: field =>  field + ' 格式错误',//用来提供提示信息的，格式错误左边需要有个“手机号”，这个是根据name来的，name一般我们写的是英文，需要将它转成中文，需要去引入
  validate: value => {//value指的是v-model的值，我们输入的值
    return /^1[3456789]\d{9}$/.test(value)
  }
});

