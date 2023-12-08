import { createRouter, createWebHashHistory } from 'vue-router'

// 组件
import Home from '@/pages/Home/index.vue'

const routes = [{ path: '/', component: Home }]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
