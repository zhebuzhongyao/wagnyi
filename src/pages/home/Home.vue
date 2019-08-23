<template>
  <!--主体部分-->
    <div class="indexMain">
      <Header/>
      <!--内容区-->
      <div class="indexWrap">
        <div class="indexConent">
        <!--轮播-->
        <div class="indexBanner">
          <div class="swiper-container swiper-container1">
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
          <li class="indexConentItem" v-for="(item, index) in describe" :key="index">
            <img :src="item.icon"/>
            <span>{{item.desc}}</span>
          </li>         
        </ul>
        <!--新品首发-->
        <ul class="indexConentSort">
          <li class="indexConentSortItem" v-for="(item, index) in shopnav.kingKongList" :key="index">
            <img :src="item.picUrl">
            <span>{{item.text}}</span>
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
          <div class="swiper-container2 swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in personalShops" :key="index">
                  <div v-for="(i, index) in item" :key="index">
                      <img :src="i.listPicUrl" >
                      <p>{{i.name}}</p> 
                  </div>                                                      
                </div>               
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" id="sirendingzhi"></div>
          </div>
          
        </div>
        <!--限时购-->
        <TimeLimit :timeLimitedPurchase='timeLimitedPurchase'/>
        <!--新品首发-->
        <div class="timeShop">
          <More :title='title' />          
          <ul class="timeShopList">
            <li class="timeShopItem" v-for="(item, index) in newItemList" :key="index">
              <img :src="item.listPicUrl"/>
              <span>{{item.name}}</span>
              <span class="price">￥{{item.counterPrice}}</span>
            </li>
          </ul>
        </div>
        <!--人气推荐-->
        <div class="popularity">
          <More :title='newTitle'/> 
          <div class="top">
            <div class="left">
              <img src="./images/renqi/renqi.png"/>
            </div>
            <div class="right">
              <div class="dis">11</div>
              <div class="big">22</div>
              <div class="small">33</div>
              <div class="pri">44</div>
            </div>
          </div> 
          <div class="bottom">
            <ul class="list">
              <li class="item" v-for="(i, index) in popularItemList" :key="index">
                <img :src="i.listPicUrl"/>
                <span class="desc">{{i.name}}</span>
                <span class="label" v-if="i.itemTagList.length">{{i.itemTagList[0].name}}</span>
              </li>
            </ul>
          </div>                  
        </div>
      </div>
      </div>
      
    </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.css"
  import Header from '../../components/header/Header.vue'
  import TimeLimit from '../../components/timeLimit/TimeLimit.vue'
  import More from '../../components/more/More.vue'
  
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        title:'新品首发',
        newTitle:'人气推荐'
      }
    },
    computed: {
      ...mapState(['describe','personalShop','shopnav','timeLimitedPurchase','newItemList','popularItemList']),
      personalShops(){
        const bigArr=[]
        let smallArr=[]
        // console.log(this.personalShop)
        if ( this.personalShop instanceof Array) {
          this.personalShop.forEach((item)=>{
            
            if(smallArr.length===0){
              bigArr.push(smallArr)
            }
            smallArr.push(item)

            if(smallArr.length===3){
              // console.log(111)
              smallArr=[]
            }
           
          })
        }
        // console.log(bigArr)
        
        return bigArr
      }

      
    },
    async mounted() {
      await this.$store.dispatch("getDesc")
      new Swiper ('.swiper-container1', {    
        loop: true, 
        autoplay:true,//自动轮播    
        pagination: {
          el: '.swiper-pagination',
        },
      
      })
      new Swiper('.swiper-container2',{
        loop: true,        
        // slidesPerView : 3,
        autoplay:true, 
        pagination: {
          el: '.swiper-pagination',
        },     
      }),
      this.$nextTick(()=>{
        new BScroll('.indexWrap',{
          click:true,
          scrollY:true,
        })
      })    
    },
    components:{
      Header,
      TimeLimit,
      More
      
    }
      
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .indexMain
    width 100%
    height 100%
    background #F4F4F4
    //内容区
    .indexWrap
      width 100%
      height 100%
      .indexConent
        overflow: hidden
        padding-top 75px
        padding-bottom 50px
        //轮播图
        .indexBanner
          width 100%
          height 180px
          overflow hidden
          img
            width 100%
            height 100%
        .indexConentList
          background #fff
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
            img
              width 10px
              height 10px            
        .indexConentSort
          background #fff
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
          margin-bottom 10px
          background #fff
          box-sizing border-box
          width 100%
          height 290px
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
          background #fff
          width 100%
          height 230px 
          padding-top 5px
          padding-left 10px
          padding-right 10px
          box-sizing border-box
          margin-bottom 10px        
          p
            height 50px
            line-height 50px
            font-size 16px
            box-sizing border-box
          .swiper-container2
            width 100%
            height 155px
            padding-bottom 30px
            box-sizing border-box
            .swiper-wrapper
              height 190px
              .swiper-slide
                display flex
                height 150px
                div 
                  width 180px
                  height 150px               
                  img
                    width 100px
                    height 100px
                    background-color #F5F5F5
                  p
                    font-size 12px
                    width 108px
        .timeShop
          background #fff
          margin-bottom 10px
          width 100%
          height 355px
          padding 10px 0
          margin-bottom 10px   
          overflow hidden    
          .timeShopList
            width 100%
            height 300px
            padding 0 5px 0 15px
            display flex
            flex-wrap wrap
            .timeShopItem
              height 150px
              width 110px
              margin-right 10px
              padding-bottom 15px            
              img
                width 100px
                height 100px
              span
                font-size 12px
              .price
                color red
        .popularity 
          background #fff 
          .top
            width 345px
            height 140px
            margin 0 15px 10px 15px
            background #FEF0DF
            display flex 
            justify-content space-between
            align-items center
            box-sizing border-box
            .left
              width 140px
              height 140px 
              img
                width 140px
                height 140px
            .right
              .dis
                font-size 10px
              .big
                font-size 14px
              .small
                font-size 12px
              .pri
                font-size 14px
                color red
          .bottom
            width 370px
            height 175px
            .list
              width 100%
              display flex
              flex-wrap wrap
              .item
                width 108px
                height 177px
                margin-left 10px
                padding-bottom 6px
                display flex
                flex-wrap wrap
                img
                  width 108px
                  height 108px
                  margin-bottom 10px
                .desc
                  width 108px
                  height 36px               
                  font-size 13px
                .label               
                  padding 2px 5px                
                  font-size 10px
                  color red
                  border 1px solid red
                  border-radius 21%
                
      </style>
