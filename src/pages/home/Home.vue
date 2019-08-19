<template>
  <!--主体部分-->
    <div class="indexMain">
      <Header/>
      <!--内容区-->
      <div class="indexConent">
        <!--轮播-->
        <div class="indexBanner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="./images/banner/1.jpg"></div>
                <div class="swiper-slide"><img src="./images/banner/2.jpg"></div>
                <div class="swiper-slide"><img src="./images/banner/1.jpg"></div>
                <div class="swiper-slide"><img src="./images/banner/2.jpg"></div>
                <div class="swiper-slide"><img src="./images/banner/1.jpg"></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>                     
          </div>       
        </div>                  
        
        <ul class="indexConentList">
          <li class="indexConentItem">
            <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
            <span>网易自营品牌</span>
          </li>
          <li class="indexConentItem">
            <i class="iconfont icon-anquan"></i>
            <span>30天无忧退货</span>
          </li>
          <li class="indexConentItem">
            <i class="iconfont icon-jiaoyi"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        <!--新品首发-->
        <ul class="indexConentSort">
          <li class="indexConentSortItem">
            <img src="./images/sorts/1.gif">
            <span>新品首发</span>
          </li>
          <li class="indexConentSortItem">
            <img src="./images/sorts/2.png">
            <span>新品首发</span>
          </li>
          <li class="indexConentSortItem">
            <img src="./images/sorts/3.png">
            <span>新品首发</span>
          </li>
          <li class="indexConentSortItem">
            <img src="./images/sorts/4.png">
            <span>新品首发</span>
          </li>
          <li class="indexConentSortItem">
            <img src="./images/sorts/5.png">
            <span>新品首发</span>
          </li>
          <li class="indexConentSortItem">
            <img src="./images/sorts/1.gif">
            <span>新品首发</span>
          </li>
          <li class="indexConentSortItem">
            <img src="./images/sorts/1.gif">
            <span>新品首发</span>
          </li>
          <li class="indexConentSortItem">
            <img src="./images/sorts/1.gif">
            <span>新品首发</span>
          </li>
          <li class="indexConentSortItem">
            <img src="./images/sorts/1.gif">
            <span>新品首发</span>
          </li>
          <li class="indexConentSortItem">
            <img src="./images/sorts/1.gif">
            <span>新品首发</span>
          </li>
        </ul>
        <!--大图-->
        <a class="bigBanner">
          <img src="./images/banner/big-banner.gif">
        </a>
        <!--折扣-->
        <div class="discount">
          <a class="discountContent">
            <div class="text">
              <p class="p1">9.9超值专区首发</p>
              <p class="p2">180款爆品新定价</p>
            </div>
            <div class="discountImages">
              <img src="./images/discount/1.png">
              <img src="./images/discount/2.png">
            </div>
          </a>
          <a class="discountContent">
            <div class="text">
              <p class="p1">9.9超值专区首发</p>
              <p class="p2">180款爆品新定价</p>
            </div>
            <div class="discountImages">
              <img src="./images/discount/1.png">
              <img src="./images/discount/2.png">
            </div>
          </a>
          <a class="discountContent">
            <div class="text">
              <p class="p1">9.9超值专区首发</p>
              <p class="p2">180款爆品新定价</p>
            </div>
            <div class="discountImages">
              <img src="./images/discount/1.png">
              <img src="./images/discount/2.png">
            </div>
          </a>
          <a class="discountContent">
            <div class="text">
              <p class="p1">9.9超值专区首发</p>
              <p class="p2">180款爆品新定价</p>
            </div>
            <div class="discountImages">
              <img src="./images/discount/1.png">
              <img src="./images/discount/2.png">
            </div>
          </a>
        </div>
        <!--私人订制-->
        <div class="siren">
          <p>私人订制</p>
          <div class="swiper-container2">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="./images/siren/1.png">
                  <p>木糖醇手口湿巾￥9.9</p>
                </div>
                <div class="swiper-slide">
                    <img src="./images/siren/1.png">
                </div>
                <div class="swiper-slide">
                  <img src="./images/siren/1.png">
                </div>
                <div class="swiper-slide">
                  <img src="./images/siren/1.png">
                </div>
                <div class="swiper-slide">
                  <img src="./images/siren/1.png">
                </div>
                <div class="swiper-slide">
                  <img src="./images/siren/1.png">
                </div>
            </div>
          </div>
        </div>
        <!--限时购-->
        <div class="timeShop">
          <div class="text">
            <span>限时购</span>
            <a class='more'>更多></a>
          </div>          
          <ul class="timeShopList">
            <li class="timeShopItem">
              <img src="./images/xianshi/1.png"/>
              <span>￥59</span>
              <span>￥80</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"
  import Header from '../../components/header/Header.vue'

  export default {
    mounted() {
      new Swiper ('.swiper-container', {    
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
    components:{
      Header
    }
      
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .indexMain
    width 100%
    //内容区
    .indexConent
      overflow: hidden
      padding-top 75px
      padding-bottom 50px
      //轮播图
      .indexBanner
        width 100%
        height 180px
        img
          width 100%
          height 100%
      .indexConentList
        box-sizing border-box
        width 100%
        height 36px
        padding 0 15px
        .indexConentItem
          width 110px
          height 36px
          line-height 36px
          float left
          font-size 12px
          text-align center
          i
            color red
      .indexConentSort
        width 100%
        height 170px
        overflow hidden
        padding 5px 10px
        box-sizing border-box
        .indexConentSortItem
          width 20%
          height 50%
          float left
          text-align center
          img
            display block
            width 55px
            height 55px
            margin 0 auto
          span
            display block
            font-size 12px
            margin-top 5px
      .bigBanner
        display block
        width 100%
        height 63px
        img
          width 100%
          height 100%
      .discount
        box-sizing border-box
        width 100%
        height 260px
        //background red
        padding 5px 15px 5px
        .discountContent
          display block
          width 170px
          height 130px
          background #F5F5F5
          float left
          &:nth-child(2n+1)
            margin-right 5px
          &:nth-child(1)
            margin-bottom 5px
          &:nth-child(2)
            margin-bottom 5px
          .text
            padding 10px
            line-height 20px
            .p1
              font-size 16px
              color #333333
            .p2
              font-size 12px
          .discountImages
            zoom 1
            img
              width 75px
              height 75px
      .siren
        width 100%
        height 230px         
        padding 5px 10px
        box-sizing border-box
        p
          height 50px
          line-height 50px
        .swiper-container2
          width 100%
          height 100%
          .swiper-wrapper
            .swiper-slide
              width 30%
              height 150px                
              img
                width 100px
                height 100px
                background-color #F5F5F5
              p
                font-size 12px
      .timeShop
        width 100%
        height 350px
        padding 10px 0
        
        .text
          height 50px
          a
            float right
        .timeShopList
          width 100%
          .timeShopItem
            height 150px
            width 100px
            img
              width 100px
              height 100px

                  




    
</style>
