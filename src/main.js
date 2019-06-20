// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont/iconfont.css'
import { Lazyload } from "feui";

Vue.config.productionTip = false
Vue.use(Lazyload, {
  lazyComponent: true,
  //失败时显示
  error: "https://i.loli.net/2018/01/29/5a6e858413275.png",
  //loading图
  loading: "https://i.loli.net/2018/01/29/5a6e858463317.gif"
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
