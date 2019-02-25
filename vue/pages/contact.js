// contact.js
import Vue from 'vue'
import Contact from './Contact.vue'

import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'

import '../assets/styles/custom.scss'

Vue.use(BootstrapVue);
Vue.use(Vuelidate)

new Vue({
  el: '#app',
  render: h => h(Contact)
})