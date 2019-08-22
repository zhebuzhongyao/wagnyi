<template>
  <!--限时购-->
  <div class="timeShop">
    <More :title='title'>
      <div class="countdown" slot="middle">
        <span class="hour">{{Hours > 9 ? Hours : '0' + Hours}}</span>
        <span class="colon">:</span>
        <span class="min">{{Minutes > 9 ? Minutes : '0' + Minutes}}</span>
        <span class="colon">:</span>
        <span class="sec">{{Seconds > 9 ? Seconds : '0' + Seconds}}</span>
      </div>
    </More>          
    <ul class="timeShopList">
      <li class="timeShopItem" v-for="(item, index) in timeLimitedPurchase.itemList" :key="index">
        <img :src="item.picUrl"/>
        <span>￥{{item.activityPrice}}</span>
        <span>￥{{item.originPrice}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import More from '../../components/more/more.vue'
  export default {
    props:['timeLimitedPurchase'],
    data() {
      return {
        title:'限时购',
        Hours: new Date().getHours(),
        Minutes: new Date().getMinutes(),
        Seconds: new Date().getSeconds()
      }
    },
    methods: {
      Refresh () {
        setInterval(() => {
          this.Hours = new Date().getHours(),
          this.Minutes = new Date().getMinutes(),
          this.Seconds = new Date().getSeconds()
        },1000)
      }
    },
    components:{
      More,
      
    },
    mounted() {
      this.Refresh()
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .timeShop
    width 100%
    height 350px
    padding 10px 0 
    margin-bottom 10px  
    background #fff    
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
          font-size 14px

                  




    

 
</style>
