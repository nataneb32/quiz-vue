import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import createStore from './store/store'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = createStore()
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
