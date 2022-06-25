import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 公共less文件
import '@/assets/less/common.less'
import '@/assets/css/iconfont.css'

import LyTab from 'ly-tab';

Vue.use(LyTab);
Vue.use(MintUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
