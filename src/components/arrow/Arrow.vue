<template>
  <div class="arrow" @click="handleClick">
    <img src="../header/images/logo/arrow.png"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
    methods: {
      handleClick(){
        this.isShow=!this.isShow
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .arrow
      width 20%
      text-align center
      line-height 30px
      background #fff
      z-index 99
      img
        width 15px
        height 15px
 
</style>
