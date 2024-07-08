// libs
import Vue from 'vue'
import PortalVue from 'portal-vue'

// router
import router from '@/router'

// components
import App from '@/App.vue'

// styles
import '@/assets/css/main.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(PortalVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
