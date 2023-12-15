import { createApp } from 'vue'
import App from './App.vue'
// icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// vue-router
import router from './router'
// 自定义组件
import { attrComponents, comComponents } from '@/custom-component/index'
// svg
import { svgAttr, svgComponent } from '@/custom-component/index'
// pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 引入icon
import '@/assets/iconfont/iconfont.css'
import '@/style/animate.scss'
// 清除css
import '@/style/reset.css'
// 初始化样式
import '@/style/global.scss'
import '@/style/dark.scss'

const app = createApp(App)
const store = createPinia()

store.use(piniaPluginPersistedstate)


app.use(router)
app.use(store)
// 注册全局组件
app.use(attrComponents)
app.use(comComponents)
// 注册全局SVG
app.use(svgAttr)
app.use(svgComponent)
app.mount('#app')

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
