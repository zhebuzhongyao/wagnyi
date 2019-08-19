<template>
  <div class="shopContainer">
    <div class="headerContainer">
      <div class="header">
        <i class="iconfont icon-shouye home"></i>      
        <div class="title">
          <p class="p1">发现</p>
          <p class="p2">甄选家</p>
        </div>
        <div class="icon">
          <i class="iconfont icon-fangdajing magnifier"></i>
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>    
      <Nav/>
    </div>   
    <div class="content">
      <div class="shiwu">
        <img src="./images/1.jpeg">
      </div>
      <div class="chaozhi">
        <img src="./images/2.jpg">
      </div>
      <div class="neibu">
        <img src="./images/3.jpeg">
      </div>
    </div>
    <div class="banner">
      <div class="swiper-container swiper-container1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./images/lunbo1.jpg"></div>
          <div class="swiper-slide"><img src="./images/lunbo2.jpg"></div>
          <div class="swiper-slide"><img src="./images/lunbo1.jpg"></div>
          <div class="swiper-slide"><img src="./images/lunbo2.jpg"></div>
          <div class="swiper-slide"><img src="./images/lunbo1.jpg"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>                     
      </div>       
    </div>
    <div class="list">
      <div class="swiper-container swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide2">
            <img src="./images/lunbotu/1.png">
          </div>
          <div class="swiper-slide">
              <img src="./images/lunbotu/2.png">
          </div>
          <div class="swiper-slide">
            <img src="./images/lunbotu/1.png">
          </div>
          <div class="swiper-slide">
            <img src="./images/lunbotu/1.png">
          </div>
          <div class="swiper-slide">
            <img src="./images/lunbotu/1.png">
          </div>
          <div class="swiper-slide">
            <img src="./images/lunbotu/1.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Nav from '../../components/nav/Nav.vue'
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"
  export default {
    components:{
      Nav
    },
    mounted() {
      new Swiper ('.swiper-container1', {    
        loop: true,     
        pagination: {
          el: '.swiper-pagination',
        },
      
      }),
      new Swiper('.swiper-container2',{
        loop: true,
        
        slidesPerView : 3,
        // spaceBetween : 5,
        //spaceBetween : '10%',按container的百分比   
        }) 
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopContainer
    width 100%
    padding-bottom 50px
    .headerContainer
      width 100%
      background #FAFAFA
      box-sizing border-box
      position fixed
      top 0
      left 0
      .header       
        height 50px
        width 100%
        display flex
        align-items center
        justify-content space-between
        padding 0 12px
        box-sizing border-box
        border-bottom 1px solid #D2D2D2
        .home
          font-size 20px
        .title
          width 100px
          display flex
          align-items center
          justify-content space-between
          .p1
            font-size 20px
            font-weight bold
          .p2
            font-size 14px
        .icon
          .magnifier
            margin-right 10px
          i
            font-size 20px
    .content
      width 100%
      padding-top 50px
      overflow hidden
      .shiwu
        width 100%
        height 120px
        img
          width 100%
          height 120px
      .chaozhi
        width 100%
        height 172px
        img
          width 100%
          height 172px
      .neibu
        width 100%
        height 85px
        img
          width 100%
          height 85px
    .banner
      width 365px
      height 225px
      display flex
      margin auto
      img
        width 365px
        height 225px
    .list
      width 365px
      height 77px
      padding 7px 5px
      .swiper-slide2
        width 63px
      img
        width 63px
        height 63px
        margin 0 5px
      
 
</style>
