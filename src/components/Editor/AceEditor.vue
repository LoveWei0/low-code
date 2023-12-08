<!--
* new page
* @author:loveWei0
* @since:2023-12-08
* AceEditor.vue
-->
<template>
  <div class="ace">
    <el-button class="btn" style="margin-left: 380px" icon="Search">
      查找
    </el-button>
    <el-button class="btn" style="margin-left: 10px" icon="Close">
      关闭
    </el-button>
    <div class="ace-editor">
      <div class="editor" />
    </div>
    <el-button type="primary" style="margin-left: 360px">重置代码</el-button>
    <el-button type="success" style="margin-left: 20px">保存提交</el-button>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.ace {
  position: absolute;
  height: calc(100% - 80px);
  width: 550px;
  top: 63px;
  background-color: #fff;
  border: 1px solid #ddd;
  z-index: 100;
}
.editor {
  margin: 10px 5px;
}
.btn {
  margin-top: 5px;
}
</style>
