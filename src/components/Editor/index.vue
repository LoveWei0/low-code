<!--
* new page
* @author:loveWei0
* @since:2023-12-13
* index.vue
-->
<template>
  <div
    id="editor"
    class="editor"
    :class="{ edit: isEdit }"
    :style="{
      ...getCanvasStyle(canvasStyleData),
      width: changeStyleWithScale(canvasStyleData.width) + 'px',
      height: changeStyleWithScale(canvasStyleData.height) + 'px',
    }"
  >
    <!-- 网格线 -->
    <Grid :is-dark-mode="isDarkMode" />
    <!-- 页面组件列表展示 -->
    {{ componentData }}
  </div>
</template>

<script setup>
import { useStore } from '@/store/index.js'
import { storeToRefs } from 'pinia'
// 工具库
import { getCanvasStyle } from '@utils/style'
import { changeStyleWithScale } from '@utils/translate'
// component
import Grid from './Grid.vue'
const { isDarkMode, canvasStyleData, componentData } = storeToRefs(useStore())
// props
defineProps({
  isEdit: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped lang="scss">
.editor {
  position: relative;
  background-color: #fff;
  margin: auto;
}
.edit {
  .component {
    outline: none;
    width: 100%;
    height: 100%;
  }
}
</style>
