import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Paginate from 'vuejs-paginate'
import { Modal } from 'bootstrap-vue/es/components';

Vue.component('paginate', Paginate)
Vue.use(Modal);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
