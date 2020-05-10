import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载 Vant 组件库
import Vant from 'vant'

// 加载 Vant 组件库样式
import 'vant/lib/index.css'

// 自动设置 REM 基准值（html 标签字体大小）
import 'amfe-flexible'

// 加载全局样式（最好放到最后，方便去覆盖第三方样式）
import './styles/index.less'

// 全局注册 Vant 中的组件
Vue.use(Vant)

Vue.config.productionTip = false

// 创建 Vue 根实例，将 router、store 配置到根实例中
// 把 App 根组件渲染到 #app 节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
