<template>
  <div id="app">
    <!--最外层大容器-->
    <div id="indexContainer">      
      <router-view></router-view>
      <Footer/>
    </div>
  </div>
</template>

<script>

import Footer from './pages/footer/Footer'

export default {
  name: 'app',
  components: {    
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background-color #F4F4F4
    #indexContainer
      width 100%
      height 100%
      background-color #fff
    
</style>
