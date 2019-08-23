<template>
  <div class="contentRight" v-if="categoryList.length" ref='xxx'>
    <div class="sortRight">
      <div class="sortbanner">
        <img :src="categoryList[index].bannerUrl">
      </div>
      <ul class="contentRightBottom">
        <li v-for="item in categoryList[index].subCateList" :key="item.id">
          <img :src="item.wapBannerUrl">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>

  </div> 
</template>


<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
    props: ['index'],
    computed: {
      ...mapState(['categoryList'])
    },
    async mounted() {
      // console.log(this.categoryList)
      // console.log(this.$refs.xxx)
      this.$nextTick(()=>{
        
        if (this.$refs.xxx) {
          // console.log(this.$refs.xxx)
        }
      })
    },
    watch: {
      categoryList () {
        // console.log(this.categoryList)
        // console.log(this.$refs.xxx)
        this.$nextTick(() => {
          if (!this.BScroll) {
            this.BScroll = new BScroll('.contentRight',{
              click:true,
              scrollY:true,
              probeType:3
            })
          }
          // console.log(this.$refs.xxx)
          this.BScroll.refresh()
        })

       
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .contentRight      
    width 300px
    height 100%
    padding 15px 15px 100px
    box-sizing border-box
    .sortRight 
      box-sizing border-box
      .sortbanner
        width 270px
        height 100px
        margin-bottom 16px
        img
          width 100%
          height 100%
    .contentRightBottom
      width 270px            
      display flex
      flex-wrap wrap
      li
        width 72px
        height 110px
        margin-right 17px
        img
          width 72px
          height 72px
        p
          font-size 12px
          text-align center


 
</style>
