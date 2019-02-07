import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Pagination from 'bootstrap-vue/es/components/pagination'

import Symbol from './filters/symbol'

Vue.use(Pagination);
Vue.filter('Symbol', Symbol);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
