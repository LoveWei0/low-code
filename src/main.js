import { createApp } from 'vue'
import App from './App.vue'
// icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// vue-router
import router from './router'
// pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 清除css
import '@/style/reset.css'
import '@/style/global.scss'

const app = createApp(App)

createPinia().use(piniaPluginPersistedstate)

app.use(router)
app.use(createPinia())
app.mount('#app')

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
