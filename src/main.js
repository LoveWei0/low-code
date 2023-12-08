import { createApp } from 'vue'
import App from './App.vue'
// vue-router
import router from './router'
// 清除css
import '@/style/reset.css'
import '@/style/global.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
