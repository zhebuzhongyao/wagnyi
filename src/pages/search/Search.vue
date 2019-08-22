<template>
  <div class="searchContainer">
    <div class="top">
      <input placeholder="夏季床品"  v-model="inputValue">
      <span @click="$router.back(-1)">取消</span>
    </div>
    <div class="bottom" v-if="!inputValue">
      <div class="hot">热门搜索</div>
      <ul class="list">
        <li class="item">
          <a>爆款行李箱</a>
        </li>
        <li class="item">
          <a>爆款行李箱</a>
        </li>
        <li class="item">
          <a>爆款行李箱</a>
        </li>
        <li class="item">
          <a>爆款行李箱</a>
        </li>
        <li class="item">
          <a>爆款行李箱</a>
        </li>
        <li class="item">
          <a>爆款行李箱</a>
        </li>
        <li class="item">
          <a>爆款行李箱</a>
        </li>
      </ul>
    </div>
    <div class="key" v-else>
      <ul>
        <li v-for="(item, index) in keywords" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import {reqSearch} from '../../api'
import {mapState} from 'vuex'
// import _ from 'loadsh'
  export default {
    data () {
      return {
        inputValue: '',
      }
    },
    computed: {
      ...mapState(['keywords'])
    },
   
    mounted() {
      // this.$store.dispatch('search',this.inputValue)
    },
    watch: {
      inputValue (val) {
        // console.log(val)
        if (this.timer) {
          return
        }else {
          this.timer = setTimeout(() => {
            this.$store.dispatch('search', val)
            clearTimeout(this.timer)
            this.timer = null
          },500)
        }
      }
    },
    
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    width 100%
    background #fff
    .top
      width 100%
      height 44px
      display flex
      justify-content space-between
      box-sizing border-box
      align-items center
      padding 0 15px
      input
        width 302px
        height 28px
        background #F4F4F4
        line-height 28px
        font-size 70%
        &::placeholder
          font-size 12px
          color #9D9D9D
          padding-left 10px
          line-height 28px           
      span
        font-size 14PX
    .bottom         
      width 100%
      padding 0 15px 15px
      .hot
        display flex       
        box-sizing border-box
        align-items center
        width 340px
        height 45px
        font-size 14px
        line-height 45px
        color #ccc
      .list
        width 100%
        display flex
        flex-wrap wrap
        .item
          border 1px solid #ccc
          margin 0 16px 16px 0
          font-size 12px
          height 20px
          line-height 20px
          border-radius 5%
          a
            margin 5px
            color #000
    .key 
      width 100%
      ul
        width 100%
        padding-left 15px
        box-sizing border-box
        li
          width 100%
          height 50px
          background #fff
          border-bottom 1px solid #ccc
          line-height 50px
          font-size 14px
       
            
        
 
</style>
