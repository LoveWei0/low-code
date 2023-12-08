<template>
  <div class="bg">
    <el-button v-if="!isScreenshot" class="close">关闭</el-button>
    <el-button v-else class="close">确定</el-button>
    <div class="canvas-container">
      <div class="canvas">内容</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isScreenshot: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
.bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 20px;
  .close {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .canvas-container {
    width: calc(100% - 40px);
    height: calc(100% - 120px);
    overflow: auto;
    .canvas {
      background-color: #fff;
      position: relative;
      margin: auto;
    }
  }
}
</style>
