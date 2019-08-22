<template>
  <div class="phoneWrap">
    <Login/>
    <div class="logo">
      <img src="../../pages/person/images/1.png"/>
    </div>
    <div class="phoneContent"> 
    <!--验证码登录 -->    
      <div class="phoneMiddle" v-show="isShow">
        <input placeholder="请输入手机号" class="text" type="text" v-validate="'required|phone'" name="myphone" v-model="phone"/>         
        <span style="color:red;font-size:14px;width:335px;margin-top:5px"  v-show="errors.has('myphone')">{{ errors.first('myphone')}}</span>
        <input placeholder="请输入短信验证码" class="text yanzheng" type="text" v-model="msg"/>
        
        <div class="problem">
          <span>遇到问题？</span>
          <span class="msg" @click="isShow=false">使用验证码登录</span>
        </div>        
        <div class="btn">登录</div>
        <div class="agree">
          <input type="checkbox" class="right"/>
          <span class="yinsi">我同意<a>《服务条款》</a>和<a>《网易隐私政策》</a></span>
        </div>
        <a class="qita" @click="changeIsShow">其它登录方式></a>        
      </div>
      <!--短信登录 --> 
      <div class="msgMiddle" v-show="!isShow">
        <input placeholder="请输入手机号" class="text" type="text"/>
        <input placeholder="请输入密码" class="text yanzheng" type="text"/>
        <div class="problem">
          <span>忘记密码</span>
          <span class="msg" @click="isShow=true">短信快捷登录</span>
        </div>        
        <div class="btn">登录</div>        
        <a class="qita">其它登录方式></a>
        
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 
  import Login from '../../components/login/Login'

  export default {
    props: ['changeIsShow'],//phone组件传过来的方法，修改父组件中isShow的状态
    data(){
      return{
        isShow:true,//标识验证码登录为true
        phone:"",
        msg:""
      }
    },
    components:{
      Login
    },
    methods: {
      
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .phoneWrap
    width 100%
    background #fff
    .logo
        width 100%
        height 32px
        display flex
        margin-top 28px        
        img
          width 96px
          height 32px
          margin auto
    .phoneContent
      width 100%      
      margin-top 30px
      .phoneMiddle
        width 100%        
        display flex
        flex-direction column
        align-items center        
        .text
          width 335px
          height 45px
          border-bottom 1px solid #ccc
          outline none
          &::placeholder
            font-size 14px
            color #AAAAAA
        .yanzheng
          margin-top 10px
        .problem
          width 335px
          display flex
          justify-content space-between
          margin 20px 0
          font-size 14PX
          color #AAAAAA
          .msg
            color #000
        .btn
          width 335px
          height 45px
          background #DD1A21
          line-height 45px
          text-align center
          color #fff
          font-size 16px 
          margin-bottom 10px
        .agree
          width 335px
          font-size 12px
          .right
            width 17px
            height 17px
            vertical middle
          .yinsi
            margin-left 5px
        .qita
          font-size 13px
          margin-top 23px
          color #000
    .msgMiddle
        width 100% 
        padding-top 50px       
        display flex
        flex-direction column
        align-items center        
        .text
          width 335px
          height 45px
          border-bottom 1px solid #ccc
          outline none
          &::placeholder
            font-size 14px
            color #AAAAAA
        .yanzheng
          margin-top 10px
        .problem
          width 335px
          display flex
          justify-content space-between
          margin 20px 0
          font-size 14PX
          color #AAAAAA
          .msg
            color #000
        .btn
          width 335px
          height 45px
          background #DD1A21
          line-height 45px
          text-align center
          color #fff
          font-size 16px 
          margin-bottom 10px
        .qita
          font-size 13px
          margin-top 23px
          color #000


         


 
</style>
