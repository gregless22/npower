// products.js
import Vue from 'vue'
import Product from './Product.vue'

import BootstrapVue from 'bootstrap-vue'

import '../assets/styles/custom.scss'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(Product)
})