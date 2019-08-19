<template>
  <div id="sortContainer">
    <div class="sortHeader">
      <div class="sortSearch" @click="$router.push('/search')">
        <i class="iconfont icon-fangdajing"></i>
        <span>搜索商品，共21615款好物</span> 
      </div>                
    </div>
    <div class="sortContent">
      <div class="contentLeft">
        <ul class="contentLeftList">
          <li class="active">推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
        </ul>
      </div>
      <SortRight/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
   import SortRight from '../../components/sortRight/SortRight.vue'
    export default {
      components:{
        SortRight
      }
      
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #sortContainer
    width 100%
    
    .sortHeader
      width 100%
      height 45px
      background-color #fff
      display flex
      border-bottom 1px solid #EDEDED
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
      width 100%
      display flex
      background-color #fff
      
      .contentLeft
        width 80px       
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
