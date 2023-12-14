<!--
* new page
* @author:loveWei0
* @since:2023-12-12
* ComponentList.vue
-->
<template>
  <div class="component-list" @dragstart="handleDragStart">
    <div
      class="list"
      v-for="(item, index) in componentList"
      draggable="true"
      :key="index"
      :data-index="index"
    >
      <span v-if="item.icon.substring(0, 2) === 'el'" :class="item.icon"></span>
      <span v-else class="iconfont" :class="'icon-' + item.icon"></span>
    </div>
  </div>
</template>

<script setup>
import componentList from '@/custom-component/component-list'
const handleDragStart = (e) => {
  e.dataTransfer.setData('index', e.target.dataset.index)
}
</script>

<style scoped lang="scss">
.component-list {
  height: 65%;
  padding: 8px;
  display: grid;
  opacity: 1;
  position: relative;
  grid-gap: 10px 19px;
  grid-template-columns: repeat(auto-fit, 80px);
  grid-template-rows: repeat(auto-fit, 40px);
  transition: opacity 0.3s 0.2s;
  .list {
    width: 80px;
    height: 40px;
    border: 1px solid #ddd;
    cursor: grab;
    text-align: center;
    padding: 2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
      cursor: grabbing;
    }
    .iconfont {
      margin-right: 4px;
      font-size: 20px;
    }
    .icon-wenben,
    .icon-biaoge {
      font-size: 18px;
    }
    .icon-tupian {
      font-size: 16px;
    }
  }
}
</style>
