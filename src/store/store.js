import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: ['test'],
    excerptFilter: '[&#8230;]',
    currentPage: 1,
    totalPages: 1,
    postid : 90
  },
  mutations: {
    FETCH_POSTS(state, posts) {
      state.posts = posts
    },
    CHANGE_PAGE(state, page) {
      state.currentPage = page
    },
    TOTAL_PAGES(state, total) {
      state.totalPages = total
    },
    POST_ID(state, id) {
      state.postid = id
    }
  },
  actions: {
    fetchPosts({ commit }) {
      return new Promise((resolve, reject) => {
        Vue.http.get("http://100creek.local/wp-json/wp/v2/posts/?_embed&per_page=2&page=" + store.state.currentPage)
          .then((response) => {
            //console.log(response.headers.map['x-wp-totalpages'][0])
            commit("TOTAL_PAGES", response.headers.map['x-wp-totalpages'][0])
            commit("FETCH_POSTS", response.body);
            resolve();
          })
          .catch((error => {
            console.log(error.statusText);
          }));
      });
    },
    fetchPost({ commit }) {
      return new Promise((resolve, reject) => {
        Vue.http.get("http://100creek.local/wp-json/wp/v2/posts/?_embed&include=" + store.state.postid)
          .then((response) => {
            //console.log(response.headers.map['x-wp-totalpages'][0])
            commit("FETCH_POSTS", response.body);
            resolve();
          })
          .catch((error => {
            console.log(error.statusText);
          }));
      });
    }
  }
});
