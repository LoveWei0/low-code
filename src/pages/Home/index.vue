<!--
* new page
* @author:loveWei0
* @since:2023-12-08
* index.vue
-->
<template>
  <div :class="!isDarkMode ? 'home' : 'home dark'">
    <Toolbar />
    <main>
      <!-- 左侧组件列表 -->
      <section :class="leftList ? 'left active' : 'left inactive'">
        <ComponentList />
        <RealTimeComponentList />
      </section>
      <el-button
        title="show-list-btn"
        class="btn show-list left-btn"
        :icon="leftList ? 'ArrowLeft' : 'ArrowRight'"
        @click="isShowLeft"
      ></el-button>
      <!-- 中间画布 -->
      <section
        class="center"
        :style="rightList ? 'margin-right:288px' : 'margin-right:10px'"
      >
        <div
          class="content"
          @drop="handleDrop"
          @dragover="handleDragover"
          @mousedown="handleMouseDown"
          @mouseup="deselectCurComponent"
        >
          <Editor />
        </div>
      </section>
      <!-- 右侧属性列表 -->
      <section :class="rightList ? 'right active' : 'right inactive'">
        <el-tabs v-if="curComponent">
          <el-tab-pane label="属性" name="attr">Attr</el-tab-pane>
          <el-tab-pane label="动画" name="animation" style="padding-top: 20px">
            动画
          </el-tab-pane>
          <el-tab-pane label="事件" name="events" style="padding-top: 20px">
            事件
          </el-tab-pane>
        </el-tabs>
        <CanvasAttr v-else />
      </section>
      <el-button
        title="show-list-btn"
        class="btn show-list right-btn"
        :icon="rightList ? 'ArrowRight' : 'ArrowLeft'"
        @click="store.isShowRightList()"
      ></el-button>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// component
import Toolbar from '@/components/Toolbar.vue'
import ComponentList from '@/components/ComponentList.vue'
import RealTimeComponentList from '@/components/RealTimeComponentList.vue'
import CanvasAttr from '@/components/CanvasAttr.vue'
// component -> Editor
import Editor from '@/components/Editor/index.vue'
// componentList
import componentList from '@/custom-component/component-list'
// store
import { useStore } from '@/store/index.js'
import { useContextMenuStore } from '@store/contextmenu'
// pinia
import { storeToRefs } from 'pinia'
// utils
import { deepCopy } from '@utils/utils.js'
const leftList = ref(true)
const store = useStore()
const { rightList, isDarkMode, curComponent, isClickComponent } =
  storeToRefs(store)
// 左侧按钮事件
const isShowLeft = () => {
  let newLeftList = !leftList.value
  leftList.value = newLeftList
}
// 中间布局事件
/**
 * 拖拽
 */
const handleDrop = (e) => {
  e.preventDefault()
  e.stopPropagation()
  const index = e.dataTransfer.getData('index')
  if (index) {
    const component = deepCopy(componentList[index])
    store.addComponent(component, index)
  }
}
const handleDragover = (e) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'copy'
}
// 鼠标事件
const handleMouseDown = (e) => {
  e.stopPropagation()
  store.setClickComponentStatus(false)
  store.setInEditorStatus(true)
}
const contextMenuStore = useContextMenuStore()
const deselectCurComponent = (e) => {
  if (!isClickComponent) {
    store.setCurComponent({ component: null, index: null })
  }
  // 0 左击 1 滚轮 2 右击
  if (e.button != 2) {
    contextMenuStore.hideContextMenu()
  }
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  background: var(--main-bg-color);
  main {
    height: calc(100% - 64px);
    position: relative;
    background: var(--secondary-bg-color);
    .show-list {
      position: absolute;
      z-index: 9;
      top: 40%;
      transition: all 0.3s;
    }
    .left-btn,
    .right-btn {
      background-color: var(--main-bg-color);
      color: var(--button-text-color);
      border: 1px;
    }
    .left-btn {
      left: 0;
      margin-left: 200px;
      border-radius: 0 50% 50% 0;
      padding: 9px 4px 9px 2px;
    }
    .right-btn {
      right: 0;
      margin-right: 288px;
      border-radius: 50% 0 0 50%;
      padding: 9px 2px 9px 4px;
    }
    .left,
    .right {
      position: absolute;
      height: 100%;
      top: 0;
      transition: all 0.3s;
      background-color: var(--main-bg-color);
      color: var(--text-color);
    }
    .left {
      width: 200px;
      left: 0;
    }
    .left.inactive ~ .center,
    .left.inactive ~ .btn.left-btn {
      margin-left: 10px;
    }
    .left.inactive {
      width: 10px;
      overflow: hidden;
      div {
        opacity: 0;
      }
    }
    .right {
      position: absolute;
      width: 288px;
      right: 0;
    }
    .right.inactive ~ .center,
    .right.inactive ~ .btn.right-btn {
      margin-right: 10px;
    }
    .right.inactive {
      width: 10px;
      overflow: hidden;
      div {
        opacity: 0;
      }
    }
    .center {
      margin: 0 288px 0 200px;
      background-color: var(--secondary-bg-color);
      height: 100%;
      overflow: auto;
      padding: 20px;
      transition: all 0.3s;
      .content {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
  }
}
</style>
