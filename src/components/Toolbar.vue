<!--
* new page
* @author:loveWei0
* @since:2023-12-08
* Toolbar.vue
-->
<template>
  <div class="toolbar">
    <el-button>JSON</el-button>
    <el-button>撤销</el-button>
    <el-button>重做</el-button>
    <label for="input" class="insert">
      插入图片
      <input id="input" type="file" hidden />
    </label>
    <el-button style="margin-left: 10px">预览</el-button>
    <el-button>保存</el-button>
    <el-button>清空画布</el-button>
    <el-button>组合</el-button>
    <el-button>拆分</el-button>
    <el-button>锁定</el-button>
    <el-button>解锁</el-button>
    <el-button>截图</el-button>
    <!-- canvas画布 -->
    <div class="canvas-config">
      <span>画布大小</span>
      <input />
      <span>*</span>
      <input />
    </div>
    <div class="canvas-config">
      <span>画布比例</span>
      <input />
      %
    </div>
    <el-switch
      style="margin-left: 6px"
      v-model="switchValue"
      class="dark-mode-switch"
      active-action-icon="View"
      inactive-action-icon="Hide"
      active-color="#000"
    />
  </div>
  <!-- 预览 -->
  <Preview v-if="isShowPreview" :isScreenshot="isScreenshot" />
  <AceEditor v-if="isShowAceEditor" />
</template>

<script setup>
import { ref } from 'vue'
// components
import Preview from '@/components/Editor/Preview.vue'
import AceEditor from '@/components/Editor/AceEditor.vue'

const switchValue = ref(false)
const isShowPreview = ref(false)
const isScreenshot = ref(false)
const isShowAceEditor = ref(false)
</script>

<style scoped lang="scss">
.toolbar {
  padding: 15px 10px;
  white-space: nowrap;
  overflow-x: auto;
  background-color: var(--main-bg-color);
  border-color: var(--ace-bg-color);
  .insert {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid var(--toolbar-border-color);
    color: var(--text-color);
    appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    margin-left: 10px;
  }
  .insert {
    background-color: var(--main-bg-color);
    background-repeat: 1px solid var(--toolbar-border-color);
    color: var(--button-text-color);
    &:active {
      background-color: var(--main-bg-color);
      border: 1px solid var(--toolbar-border-color);
      color: var(--button-text-color);
    }
    &:hover {
      background-color: var(--button-active-text-color);
      border-color: var(--actived-bg-color);
      color: var(--main-bg-color);
    }
  }
  .canvas-config {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: var(--text-color);
    input {
      width: 50px;
      margin-left: 4px;
      outline: none;
      padding: 0 5px;
      border: 1px solid var(--border-color);
      color: #606266;
    }
    span {
      margin: 0 5px;
    }
  }
}
</style>
