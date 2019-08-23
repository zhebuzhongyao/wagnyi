<template>
  <div class="text">
    <div class="left">      
      <span>{{title}}</span>
      <slot name="middle"></slot> 
    </div>            
    <a class='more'>更多></a>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props:['title'],    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .text
    display flex
    justify-content space-between
    height 50px
    padding 0 15px
    box-sizing border-box
    align-items center
    .left           
      span
        font-size 16px 
        float left            
      .countdown
        float left                       
        margin-left 6px
        
        .hour,.min,.sec
          background #000
          color #fff
          margin-left 5px 
          font-size 14px
        .colon
          margin-left 5px
          font-size 14px
    .more            
      font-size 14px
       
 
</style>
