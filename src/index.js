import Vue from 'vue'

import TestComponent from './components/TestComponent'

const app = new Vue({
  el: '#app',
  data: {
    name: 'Caio'
  },
  render: h => h(TestComponent),
  components: {
    TestComponent
  }
})
