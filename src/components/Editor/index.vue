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
      <component
        :is="item.component"
        v-if="item.component.startsWith('SVG')"
        :id="'component' + item.id"
        class="component"
        :style="getSVGStyle(item.style)"
        :prop-value="item.propValue"
        :element="item"
        :request="item.request"
      />
      <component
        :is="item.component"
        v-else-if="item.component != 'VText'"
        :id="'component' + item.id"
        class="component"
        :style="getComponentStyle(item.style)"
        :prop-value="item.propValue"
        :element="item"
        :request="item.request"
      />
      <component
        :is="item.component"
        v-else
        :id="'component' + item.id"
        class="component"
        :style="getComponentStyle(item.style)"
        :prop-value="item.propValue"
        :element="item"
        :request="item.request"

      />
    </Shape>
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
// utils -> style
import { getStyle, getSvgStyle } from '@utils/style'
// ref
import { ref } from 'vue'
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
// data
const editorData = ref({
  editorX: 0,
  editorY: 0,
})
const startData = ref({
  x: 0,
  y: 0,
})
const widthOrHeightData = ref({
  width: 0,
  height: 0,
})
const isShowAreaData = ref(false)
const svgFilterAttrs = ref(['width', 'height', 'top', 'left', 'rotate'])
// 组件样式
const getComponentStyle = (style) => {
  return getStyle(style, svgFilterAttrs.value)
}
// svg样式
const getSVGStyle = (style) => {
  return getSvgStyle(style, svgFilterAttrs.value)
}
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
    background-color: pink;
  }
}
</style>
