// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.prototype.$axios = axios
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.use(Vuex);
Vue.use(ElementUI)
Vue.config.productionTip = false
//请求拦截器
axios.interceptors.request.use((config) => {
  Mint.Indicator.open({//打开loading
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
}, (err) => {
  return Promise.reject(err)

});
//响应拦截器
axios.interceptors.response.use((response) => {
  Mint.Indicator.close();//关闭loading
  return response;
}, (err) => {
  return Promise.reject(err);

});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
