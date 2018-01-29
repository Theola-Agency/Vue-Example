/* Routing explained in English at https://scotch.io/tutorials/getting-started-with-vue-router */
import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '../Home.vue'
import BlogLayout from '../posts/Posts.vue'
import ScrollLayout from '../scroll/Scroll.vue'
import InputsLayout from '../inputs/Inputs.vue'
import LayoutsLayout from '../layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeLayout
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogLayout
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: ScrollLayout
    },
    {
      path: '/inputs',
      name: 'Inputs',
      component: InputsLayout
    },
    {
      path: '/layout',
      name: 'Layout',
      component: LayoutsLayout
    }
  ]
})
