<!--
* new page
* @author:loveWei0
* @since:2023-12-13
* CanvasAttr.vue
-->
<template>
  <div class="attr-container">
    <p class="title">画布属性</p>
    <el-form style="padding: 20px">
      <el-form-item
        v-for="(key, index) in Object.keys(options)"
        :key="index"
        :label="options[key]"
      >
        <el-color-picker
          v-if="isIncludesColor(key)"
          v-model="canvasStyleData[key]"
          show-alpha
        ></el-color-picker>
        <el-input
          v-else
          v-model.number="canvasStyleData[key]"
          type="number"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/store/index.js'
import { storeToRefs } from 'pinia'
const options = ref({
  color: '颜色',
  opacity: '不透明度',
  backgroundColor: '背景色',
  fontSize: '字体大小',
})
const { canvasStyleData } = storeToRefs(useStore())
const isIncludesColor = (str) => {
  return str.toLowerCase().includes('color')
}
</script>

<style scoped lang="scss">
.attr-container {
  .title {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    height: 40px;
    line-height: 40px;
    color: var(--text-color);
    border-bottom: 2px solid #e4e7ed;
  }
}
</style>
