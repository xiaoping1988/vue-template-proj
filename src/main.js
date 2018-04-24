// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mock from './mock'
import axios from './axios'
import './assets/css/custom.css'
import 'font-awesome/css/font-awesome.min.css'
import MyPlugin from './assets/js/plugin'

Vue.use(ElementUI)
Vue.use(MyPlugin)

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  Mock.bootstrap()
}

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

export default vm
