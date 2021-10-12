import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { jwtToken } from './store/index'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//URL BASE
axios.defaults.baseURL = 'https://api-proyecto-ciclo3.herokuapp.com/api';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  jwtToken,
  render: h => h(App)
}).$mount('#app')
