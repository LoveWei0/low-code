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
    <Shape
      v-for="(item, index) in componentData"
      :key="item.id"
      :active="item.id === (curComponent || {}).id"
      :element="item"
      :default-style="item.style"
      :index="index"
      :class="{ lock: item.isLock }"
    >
      <component :is="item.component" />
    </Shape>
    <!-- <div v-for="(com, index) in componentData" :key="index">
      <component :is="com"></component>
    </div> -->
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
import Shape from './Shape.vue'
// show store
const { isDarkMode, canvasStyleData, componentData, curComponent } =
  storeToRefs(useStore())
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
  .lock {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }
}
.edit {
  .component {
    outline: none;
    width: 100%;
    height: 100%;
  }
}
</style>
