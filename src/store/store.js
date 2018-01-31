import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: ['test'],
    excerptFilter: '[&#8230;]'
  },
  mutations: {
    FETCH_POSTS(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    fetchPosts({ commit }) {
      return new Promise((resolve, reject) => {
        Vue.http.get("http://100creek.local/wp-json/wp/v2/posts/?_embed&per_page=3")
          .then((response) => {
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
