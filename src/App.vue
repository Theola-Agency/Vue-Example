<template>
  <div id="app"
  @scroll="handleScroll">
    <div ref="homecontainer">
    <navbar/>
    <keep-alive>
      <router-view :posts="posts, excerptFilter"/>
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
  data() {
    return {
      posts: [],
      excerptFilter: ''
    }
  },
  components: {
    navbar: Navigation,
    scroll: Scroll
  },
  mixins: [HandleScroll],
  mounted() {
    this.$store.dispatch("fetchPosts").then(() => {
      this.posts = this.$store.state.posts
      this.excerptFilter = this.$store.state.excerptFilter
    })
  }
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
