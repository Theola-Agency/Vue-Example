<template>
  <div id="app"
  @scroll="handleScroll">
    <div class="container" ref="homecontainer">
    <navbar/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <scroll
      :scrolldata="scrollPosition"/>
  </div>
  </div>
</template>

<script>
import Navigation from './components/router/Navigation.vue'
import Scroll from './components/scroll/Scroll.vue'
import HandleScroll from './components/scroll/handle-scroll'

export default {
  name: 'app',
  components: {
    navbar: Navigation,
    scroll: Scroll
  },
  mixins: [HandleScroll]
}
</script>

<style lang="scss">

#app {
  padding-top    : 60px;
  padding-bottom : 60px;
  overflow-y     : scroll;
  max-height     : 100vh;
}

</style>
