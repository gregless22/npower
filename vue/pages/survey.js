import Vue from 'vue'
// import App from '../App.vue'
import Survey from './Survey.vue'

import BootstrapVue from 'bootstrap-vue'

//get the validator.
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(Survey)
})

