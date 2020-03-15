import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import createStore from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft,faRedo,faFlagCheckered} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowLeft)
library.add(faFlagCheckered)
library.add(faRedo)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuex)
Vue.config.productionTip = false

const store = createStore()
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
