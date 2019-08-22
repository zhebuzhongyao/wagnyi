<template>
  <!--头部-->
  <header class="indexHeader">
    <div class="indexHeaderTop">
      <a><img src="./images/logo/logo.png"/></a>
      <div class="indexSearch" @click="$router.push('/search')">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜索商品，共21615款好物</span>
      </div>
      <button class="btn" @click="$router.push('/person')">登录</button>
    </div>
    <Nav/>
  </header>
</template>

<script type="text/ecmascript-6">
  
  import Nav from '../../components/nav/Nav.vue'
  export default {
    components:{
      Nav
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //头部
    .indexHeader
      z-index 99
      background-color white
      width 100%
      height 75px
      position fixed
      left 0
      top 0
      //头部的上边
      .indexHeaderTop
        width 100%
        height 45px
        display flex
        justify-content center
        align-items center
        a
          zoom 1
          img
            width 70px
            height 20px
            margin-right 8px
        .indexSearch
          width 220px
          height 30px
          line-height 30px
          background #EDEDED
          text-align center
          span
            font-size 12px
            color #666
            
        .btn
          width 40px
          height 20px
          margin-left 8px
          background white
          border 1px solid #B9383D
          color #B9383D
          border-radius 10%
          font-size 12px
          //头部的下边
      </style>
