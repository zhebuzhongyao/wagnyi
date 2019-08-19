<template>
  <div>
    <div class="personContainer" v-if="isShow">    
      <Login/>   
      <div class="logoWrap">
        <img src="./images/1.png" class="logo" />
      </div>
      <div class="text">
        <button class="phone" @click="isShow=false">手机号快捷登录</button>
        <button class="email">邮箱账号登录</button>
      </div>
      <div class="copy">
        <div class="container">
          <div class="wx">
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
            <span>|</span>
          </div>
          <div class="qq">
            <i class="iconfont icon-web-icon-"></i>
            <span>QQ</span>
            <span>|</span>
          </div>
          <div class="wb">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>     
          </div>      
        </div>    
      </div>       
    </div>
  <div v-else>
    <Phone />
  </div>
  </div>

</template>

<script type="text/ecmascript-6">
import Login from '../../components/login/Login'
import Phone from '../phone/Phone'
  export default {
    
    data () {
      return {
        isShow:true
      }
    },
    methods: {
      showPhone(){
        // this.$router.replace('/person/phone')

      }
    },
    components:{
      Login,
      Phone
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.personContainer
  width 100%
  .logoWrap
    width 100%
    height 240px
    display flex
    .logo
      width 133px
      height 45px
      margin auto
  .text
    display flex
    flex-direction column
    .phone
      margin auto
      width 335px
      height 46px
      margin-bottom 16px
      background #DD1A21 url("./images/2.png") no-repeat 100px -5px
      background-size 5%
      color #fff
      border 1px solid #DD1A21       
    .email
      margin auto
      width 335px
      height 46px
      background url("./images/2.png") no-repeat 105px 15px
      background-size 5%
      color #DD1A21
      border 1px solid #DD1A21
  .copy
    margin-top 200px
    width 375px 
    .container
      margin-left 70px
      overflow hidden
      .wx,.qq,.wb
        float left
        width 90px
        color #7F7F7F         
        span
          margin-right 10px
          color #7F7F7F
          margin-left 5px
          font-size 14px 
    
    

    
 
</style>
