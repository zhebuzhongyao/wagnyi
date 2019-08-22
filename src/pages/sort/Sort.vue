<template>
  <div id="sortContainer">
    <div class="sortHeader">
      <div class="sortSearch" @click="$router.push('/category')">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜索商品，共21615款好物</span> 
      </div>                
    </div>
    <div class="sortContent">
      <div class="contentLeft" ref="left">
        <ul class="contentLeftList">
          <li v-for="(item, index) in categoryList" :key="item.id" @click="toggle(index)">{{item.name}}</li>          
        </ul>
      </div>
      <SortRight :index="indexList"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    import SortRight from '../../components/sortRight/SortRight.vue'
    import {mapState} from 'vuex'
    export default {
      computed: {
        ...mapState(['categoryList'])
      },
      data () {
        return {
          indexList: 0
        }
      },
      methods: {
        toggle (index) {
          this.indexList = index
        }
      },
      components:{
        SortRight
      },
      async mounted() {
        await this.$store.dispatch('getCategory')
        this.$nextTick(() => {
          new BScroll('.contentLeft',{
            click:true,
            scrollY:true,
            probeType:3
          })
        })
        
        
      },
      
      
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #sortContainer
    width 100%
    height 100%
    
    .sortHeader
      width 100%
      height 45px
      background-color #fff
      display flex
      border-bottom 1px solid #EDEDED
      position fixed
      background #fff
      z-index 99

      .sortSearch
        margin auto
        width 340px
        height 30px
        line-height 30px
        background #EDEDED
        text-align center
        span
          font-size 12px
          color #666
    .sortContent
      padding-top 45px 0 50px 0
      box-sizing border-box
      width 100%
      height 100%
      display flex
      background-color #fff
      padding 45px 0 50px
      .contentLeft
        width 80px 
        height 100%      
        .contentLeftList         
          text-align center
          line-height 25px 
           
          li
            width 100%
            height 25px
            margin-top 20px            
            font-size 13px 
                    
            &.active
              border-left 2px solid #B9383D
              color #B9383D
      </style>
