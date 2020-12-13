import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/all.css'

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: "UXsRSLhBmxtXfBKAdXSDqWMOacCSy3yw"
})

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
