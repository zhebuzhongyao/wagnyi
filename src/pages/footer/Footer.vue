<template>
  <!--底部-->
  <footer class="indexFooter" v-show="$route.meta.showFooter">
    <ul class="indexFooterList">        
      <li class="indexFooterItem">            
        <router-link to="/home" class="footerLink">
          <i class="iconfont icon-shouye home"></i>
          <p>首页</p>
        </router-link>
      </li>       
      <li class="indexFooterItem">
        <router-link to="/sort" class="footerLink">
          <i class="iconfont icon-fenlei"></i>
          <p>分类</p>
        </router-link>
      </li>              
      <li class="indexFooterItem">
        <router-link to="/shop" class="footerLink">
          <i class="iconfont icon-tupian"></i>
          <p>识物</p>
        </router-link>
      </li>        
      <li class="indexFooterItem">
        <router-link to="/shopcart" class="footerLink">
          <i class="iconfont icon-gouwuche"></i>
          <p>购物车</p>
        </router-link>
      </li>         
      <li class="indexFooterItem">
        <router-link to="/person" class="footerLink">
          <i class="iconfont icon-geren"></i>
          <p>个人</p>
        </router-link>
      </li>        
    </ul>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .indexFooter
    width 100%
    height 50px
    position fixed
    bottom 0
    background white
    z-index 999
    .indexFooterList
      height 100%
      width 100%
      display flex
      .indexFooterItem
        display flex
        align-items center
        justify-content center
        //text-align center
        height 100%
        width 20%
        .footerLink
          display block
          i
            display block
            margin 0 auto
            width 20px
            height 20px
          p
            font-size 12px
</style>
