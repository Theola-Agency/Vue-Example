import Vue from 'vue'
import VueFire from 'vuefire'

import { store } from './store/store';
import router from './components/router/router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
