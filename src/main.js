import Vue from 'vue'
import App from './App.vue'

import router from "./router/index"
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
//baseURL http://api.cms.liulongbin.top
//        http://api.cms.liulongbin.top/api
/*
获取列表地址:  http://www.liulongbin.top:3005/api/getprodlist/
添加地址:  http://www.liulongbin.top:3005/api/addproduct/
删除地址:  http://www.liulongbin.top:3005/api/delproduct/

http://api.cms.liulongbin.top/api/getlunbo
*/
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
