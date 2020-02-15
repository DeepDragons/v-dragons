import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Paginate from 'vuejs-paginate'
import BootstrapVue from 'bootstrap-vue';
import { BTable } from 'bootstrap-vue'

import VueGlide from 'vue-glide-js/dist/vue-glide.css'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueGlide)
Vue.component('paginate', Paginate)
Vue.use(BootstrapVue);
Vue.component('b-table', BTable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
