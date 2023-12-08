import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      dts: 'src/auto-import.d.ts',
      eslintrc: { enable: false },
    }),
    Components({
      dirs: ['src/components', 'src/pages/components'],
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
