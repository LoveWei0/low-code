<!--
* new page
* @author:loveWei0
* @since:2023-12-12
* RealTimeComponentList.vue
-->
<template>
  <div class="real-time-component-list">
    <div
      class="list"
      v-for="(item, index) in componentData"
      :key="index"
      :class="{ actived: transformIndex(index) === curComponentIndex }"
    >
      <span class="iconfont" :class="'icon-' + getComponent(index).icon"></span>
      <span>{{ getComponent(index).label }}</span>
      <div class="icon-container">
        <span class="iconfont icon-shangyi"></span>
        <span class="iconfont icon-xiayi"></span>
        <span class="iconfont icon-shanchu"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useStore()
const { componentData, curComponentIndex } = storeToRefs(useStore())
const transformIndex = (index) => {
  return store.componentData.length - 1 - index
}
const getComponent = (index) => {
  return store.componentData[componentData.value.length - 1 - index]
}
</script>

<style scoped lang="scss">
.real-time-component-list {
  height: 35%;

  .list {
    height: 30px;
    cursor: grab;
    text-align: center;
    color: #333;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 0 10px;
    position: relative;
    user-select: none;
    opacity: 1;

    &:active {
      cursor: grabbing;
    }

    &:hover {
      background-color: rgba(200, 200, 200, 0.2);

      .icon-container {
        display: block;
      }
    }

    .iconfont {
      margin-right: 4px;
      font-size: 16px;
    }

    .icon-wenben,
    .icon-tupian {
      font-size: 14px;
    }

    .icon-container {
      position: absolute;
      right: 10px;
      display: none;

      .iconfont {
        cursor: pointer;
      }
    }
  }

  .actived {
    background-color: #ecf5ff;
    color: #409eff;
  }
}
</style>
