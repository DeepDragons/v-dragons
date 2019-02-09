import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Paginate from 'vuejs-paginate'
import { Modal } from 'bootstrap-vue/es/components';

import Symbol from './filters/symbol'

Vue.component('paginate', Paginate)
Vue.filter('Symbol', Symbol);
Vue.use(Modal);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
