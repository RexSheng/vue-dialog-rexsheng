import Vue from 'vue'
import App from './App.vue'
import dlg from './lib/index'
Vue.use(dlg)
new Vue({
  el: '#app',
  render: h => h(App)
})
