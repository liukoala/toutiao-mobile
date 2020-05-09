import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式
import './styles/index.less'

Vue.config.productionTip = false

// 创建 Vue 根实例，将 router、store 配置到根实例中
// 把 App 根组件渲染到 #app 节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
