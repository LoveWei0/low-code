<!--
* new page Shape
* @author:loveWei0
* @since:2023-12-14
* Shape.vue
-->
<!--  -->
<!--  -->
<template>
  <div class="shape" :class="{ active }">
    <span class="iconfont icon-xiangyouxuanzhuan" v-show="isActive()">ddd</span>
    <span class="iconfont icon-suo" v-show="element.isLock"></span>
    <div
      class="shape-point"
      v-for="item in isActive() ? getPointList() : []"
      :key="item"
      :style="getPointStyle(item)"
    ></div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  active: {
    type: Boolean,
    default: true,
  },
  element: {
    required: true,
    type: Object,
    default: () => ({}),
  },
  defaultStyle: {
    required: true,
    type: Object,
    default: () => ({}),
  },
  index: {
    required: true,
    type: [Number, String],
    default: 0,
  },
})
const pointList = ref(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l']) // 八个方向
const pointList2 = ref(['r', 'l']) // 左右两个方向
const initialAngle = ref({
  lt: 0,
  t: 45,
  rt: 90,
  r: 135,
  rb: 180,
  b: 225,
  lb: 270,
  l: 315,
}) // 每个点对应点初始角度
const angleToCursor = ref([
  { start: 338, end: 23, cursor: 'nw' },
  { start: 23, end: 68, cursor: 'n' },
  { start: 68, end: 113, cursor: 'ne' },
  { start: 113, end: 158, cursor: 'e' },
  { start: 158, end: 203, cursor: 'se' },
  { start: 203, end: 248, cursor: 's' },
  { start: 248, end: 293, cursor: 'sw' },
  { start: 293, end: 338, cursor: 'w' },
]) // 每个范围点角度对应点光标
const cursors = ref({})
const getPointList = () => {
  return props.element?.component === 'line-shape'
    ? pointList2.value
    : pointList.value
}
const isActive = () => {
  return props.active || props.element?.isLock
}
const getPointStyle = (point) => {
  const { width, height } = props.defaultStyle
  const hasT = /t/.test(point)
  const hasB = /b/.test(point)
  const hasL = /l/.test(point)
  const hasR = /r/.test(point)
  let newLeft = 0
  let newTop = 0
  // 四个角的点
  if (point.length === 2) {
    newLeft = hasL ? 0 : width
    newTop = hasT ? 0 : height
  } else {
    // 上下两点的点，宽度居中
    if (hasT && hasB) {
      newLeft = width / 2
      newTop = hasT ? 0 : height
    }
    // 左右两边的点， 高度居中
    if (hasL || hasR) {
      newLeft = hasL ? 0 : width
      newTop = Math.floor(height / 2)
    }
  }
  const style = {
    marginLeft: '-4px',
    marginTop: '-4px',
    left: `${newLeft}px`,
    top: `${newTop}px`,
    cursor: cursors.value[point],
  }
  return style
}
</script>

<style scoped lang="scss">
.shape {
  position: absolute;

  &:hover {
    cursor: move;
  }
}

.active {
  outline: 1px solid #70c0ff;
  user-select: none;
}

.shape-point {
  position: absolute;
  background: #fff;
  border: 1px solid #59c7f9;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 9;
}

.icon-xiangyouxuanzhuan {
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: -24px;
  left: 50%;
  color: #59c7f9;
  transform: translateX(-50%);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}

.icon-suo {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
