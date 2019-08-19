<template>
  <div class="indexHeaderBottom">
    <div class="nav" ref="nav">
      <ul class="indexHeaderBottomList">
        <li class="indexHeaderBottomItem">
          推荐
        </li>
        <li class="indexHeaderBottomItem">
          居家生活
        </li>
        <li class="indexHeaderBottomItem">
          服饰鞋包
        </li>
        <li class="indexHeaderBottomItem">
          美食酒水
        </li>
        <li class="indexHeaderBottomItem">
          个护清洁
        </li>
        <li class="indexHeaderBottomItem">
          母婴亲子
        </li>
        <li class="indexHeaderBottomItem">
          运动旅行
        </li>
        <li class="indexHeaderBottomItem">
          数码家电
        </li>
        <li class="indexHeaderBottomItem">
          全球特色
        </li>
      </ul>
    </div>          
    <div class="arrow">
      <img src="../header/images/logo/arrow.png"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {    
    mounted() {
      new BScroll(this.$refs.nav,{
        starX:0,
        click:true,
        scrollX:true,
        scrollY:false,                
      })
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .indexHeaderBottom          
    height 30px
    width 100% 
    display flex     
    .nav
      width 80%
      .indexHeaderBottomList
        width 700px
        height 30px
        padding-left 5px
        white-space nowrap
        overflow hidden            
        .indexHeaderBottomItem               
          display inline-block             
          height 30px
          line-height 30px
          text-align center
          padding 0 10px
          font-size 14px
    .arrow
      width 20%
      text-align center
      line-height 30px
      img
        width 15px
        height 15px      

 
</style>
