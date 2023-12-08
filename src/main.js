import { createApp } from 'vue'
import App from './App.vue'
// icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// vue-router
import router from './router'
// 清除css
import '@/style/reset.css'
import '@/style/global.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
