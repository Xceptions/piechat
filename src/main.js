import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue';
import App from './App.vue';
import router from './router.js'
import { store } from './store.js'

import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
