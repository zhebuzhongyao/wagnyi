<template>
  <header class="header">        
    <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>      
    <div>
      <i class="iconfont icon-fangdajing magnifier"></i>
      <i class="iconfont icon-gouwuche"></i>
    </div>       
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 100%
    height 45px
    background #FAFAFA url('../../components/header/images/logo/logo.png') no-repeat center 
    background-size 85px 27px
    padding 0 8px 0 12px
    box-sizing border-box
    display flex
    justify-content space-between
    img
      width 78px
      height 23px
      margin auto
    i
      font-size 20px 
      text-algin center
      line-height 45px
    .magnifier
      margin-right 15px 
</style>
