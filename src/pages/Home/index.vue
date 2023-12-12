<!--
* new page
* @author:loveWei0
* @since:2023-12-08
* index.vue
-->
<template>
  <div class="home">
    <Toolbar />
    <main>
      <!-- 左侧组件列表 -->
      <section :class="leftList ? 'left active' : 'left inactive'">
        左侧
      </section>
      <el-button
        title="show-list-btn"
        class="btn show-list left-btn"
        :icon="leftList ? 'ArrowLeft' : 'ArrowRight'"
        @click="isShowLeft"
      ></el-button>
      <!-- 中间画布 -->
      <section class="center">
        <div class="content">中间</div>
      </section>
      <!-- 右侧属性列表 -->
      <section :class="rightList ? 'right active' : 'right inactive'">
        右侧
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
import { ref } from 'vue'
// component
import Toolbar from '@/components/Toolbar.vue'
// store
import { useStore } from '@/store/index.js'
// pinia
import { storeToRefs } from 'pinia'
const leftList = ref(true)
const store = useStore()
const { rightList } = storeToRefs(store)
// 左侧按钮事件
const isShowLeft = () => {
  let newLeftList = !leftList.value
  leftList.value = newLeftList
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
