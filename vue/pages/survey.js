import Vue from 'vue'
import Survey from './Survey.vue'
import BootstrapVue from 'bootstrap-vue'

//get the validator.
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import '../assets/styles/custom.scss'

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(Survey)
})

