import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

Vue.config.productionTip = false
Vue.component('split-panes', Splitpanes); 
Vue.component('split-pane', Pane); 

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
