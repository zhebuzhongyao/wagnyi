<template>
  <div class="navContainer">
    <div class="nav" v-show="isShow" ref="nav">
      <ul class="navList">
        <li class="navItem">
          推荐
        </li>
        <li class="navItem">
          居家生活
        </li>
        <li class="navItem">
          服饰鞋包
        </li>
        <li class="navItem">
          美食酒水
        </li>
        <li class="navItem">
          个护清洁
        </li>
        <li class="navItem">
          母婴亲子
        </li>
        <li class="navItem">
          运动旅行
        </li>
        <li class="navItem">
          数码家电
        </li>
        <li class="navItem">
          全球特色
        </li>
      </ul>
    </div>
    
    <div class="list" v-show="!isShow">
      <div class="top">全部频道</div>
      <div class="bottom">
        <ul class="bottomList">
          <li class="bottomItem active">推荐</li>
          <li class="bottomItem">居家生活</li>
          <li class="bottomItem">服饰鞋包</li>
          <li class="bottomItem">美食酒水</li>
          <li class="bottomItem">美食酒水</li>
          <li class="bottomItem">美食酒水</li>
          <li class="bottomItem">美食酒水</li>
          <li class="bottomItem">美食酒水</li>
          <li class="bottomItem">美食酒水</li>
          <li class="bottomItem">美食酒水</li>
          
        </ul>
      </div>
    </div>

    <div class="more" @click="handleClick" >
      <img src="../header/images/logo/arrow.png" :class="{'active': !isShow}" />
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        isShow:true,
      }
    }, 
    methods: {
      handleClick(){
        this.isShow=!this.isShow
        // consloe.log(this.$refs.more)

      }
    },
    
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
  .navContainer
    width 100%
    display flex
    .nav
      width 100%
      height 30px
      overflow hidden
      .navList
        display inline-block
        padding-left 15px
        box-sizing border-box 
        white-space nowrap       
        .navItem
          font-size 14px
          height 30px
          line-height 30px
          padding 0 8px
          box-sizing border-box
          text-algin center
          color #666
          display inline-block
    .list
      background white
      margin-top -1px      
      width 100%      
      .top
        width 100%
        font-size 14px
        height 30px
        line-height 30px        
        padding-left 15px
        box-sizing border-box
        border-top 1px solid #EDEDED
        color #333
      .bottom
        width 100%        
        .bottomList
          display flex
          flex-wrap wrap
          padding-top 12px
          box-sizing border-box
        .bottomItem
          width 75px
          height 28px
          font-size 12px
          border 1px solid #EDEDED
          margin 0 20px 15px
          text-align center
          line-height 28px
          background #FAFAFA
          color #333
          &.active
            color #BB3D41
            border-color #BB3D41
    .more
      width 30px
      height 30px
      z-index 999
      margin-left -30px
      background #fff
      img
        transition .5s
        width 15px
        height 15px
        margin-left 7px
        margin-top 7px
        background #fff
        &.active
          transform rotate(180deg)

</style>
