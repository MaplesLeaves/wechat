import Vue from 'vue'
import App from './App'
import './../static/weui/weui.css'
import store from './store/index'

Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
