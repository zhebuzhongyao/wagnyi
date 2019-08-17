<template>
<!--最外层大容器-->
  <div id="indexContainer">
    <!--主体部分-->
    <div class="indexMain">
      <!--头部-->
      <header class="indexHeader">
        <div class="indexHeaderTop">
          <a><img src="./images/logo/logo.png"/></a>
          <div class="indexSearch">
            <i class="iconfont icon-fangdajing"></i>
            <span>搜索商品，共21615款好物</span>
          </div>
          <button class="btn">登录</button>
        </div>
        <div class="indexHeaderBottom">
          <div class="nav">
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
            <img src="./images/logo/arrow.png"/>
          </div>
        </div>
      </header>
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
        <a class="bigBanner">
          <img src="./images/banner/big-banner.gif">
        </a>
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
      </div>
    </div>
    <!--底部-->
    <footer class="indexFooter">
      <ul class="indexFooterList">
        <li class="indexFooterItem">
          <a>
            <i class="iconfont icon-shouye home"></i>
            <p>首页</p>
          </a>
        </li>
        <li class="indexFooterItem">
          <a>
            <i class="iconfont icon-fenlei"></i>
            <p>分类</p>
          </a>
        </li>
        <li class="indexFooterItem">
          <a>
            <i class="iconfont icon-tupian"></i>
            <p>识物</p>
          </a>
        </li>
        <li class="indexFooterItem">
          <a>
            <i class="iconfont icon-gouwuche"></i>
            <p>购物车</p>
          </a>
        </li>
        <li class="indexFooterItem">
          <a>
            <i class="iconfont icon-geren"></i>
            <p>个人</p>
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"
   
  export default {
    mounted() {
      new Swiper ('.swiper-container', {    
        loop: true,     
        pagination: {
          el: '.swiper-pagination',
        },
      
      })       
    },
      
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #indexContainer
    width 100%
    //主体
    .indexMain
      width 100%
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
        .indexHeaderBottom          
          height 30px
          overflow hidden
          display flex
          .nav
            width 80%
            .indexHeaderBottomList
              height 33px
              padding-left 5px
              .indexHeaderBottomItem
                float left              
                height 33px
                line-height 30px
                text-align center
                padding 0 10px
                font-size 14px
          .arrow
            width 20%
            text-align center
            line-height 33px
            img
              width 15px
              height 15px      
        
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
          padding 0 5px 10px 5px
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
    .indexFooter
      width 100%
      height 50px
      position fixed
      bottom 0
      background white
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
          a
            display block
            i
              display block
              margin 0 auto
              width 20px
              height 20px
            p
              font-size 12px

  
</style>
