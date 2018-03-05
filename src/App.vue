<template>
  <div id="app"
  @scroll="handleScroll">
    <div ref="homecontainer">
    <navbar/>
    <router-view />
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

<style lang = "scss">
@import "./assets/reset.css";
#app {
  padding-top    : 60px;
  padding-bottom : 60px;
  overflow-y     : scroll;
  overflow-x     : hidden;
  height         : 100vh;
}

pre {
  background : lightgray;
  padding    : 10px;
}

</style>
