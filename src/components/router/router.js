/* Routing explained in English at https://scotch.io/tutorials/getting-started-with-vue-router */
import Vue from 'vue'
import Router from 'vue-router'
import HomeLayout from '../Home.vue'
import BlogLayout from '../posts/Posts.vue'
import PostLayout from '../posts/Post.vue'
import ScrollLayout from '../scroll/Scroll.vue'
import InputsLayout from '../inputs/Inputs.vue'
import FilterLayout from '../filter/Filter.vue'
import NotFoundComponent from '../NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path      : '/',
      name      : 'Home',
      component : HomeLayout
    },
    {
      path      : '/blog',
      name      : 'Blog',
      component : BlogLayout
    },
    {
      path      : '/blog/:id',
      name      : 'Post',
      component : PostLayout
    },
    {
      path      : '/scroll',
      name      : 'Scroll',
      component : ScrollLayout
    },
    {
      path      : '/inputs',
      name      : 'Inputs',
      component : InputsLayout
    },
    {
      path      : '/filter',
      name      : 'Filter',
      component : FilterLayout
    },
    { path: '*', component: NotFoundComponent }
  ]
})
