<!--
* new page
* @author:loveWei0
* @since:2023-12-12
* RealTimeComponentList.vue
-->
<template>
  <div class="real-time-component-list">timeList{{ componentData }}</div>
</template>

<script setup>
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
const { componentData } = storeToRefs(useStore())
</script>

<style scoped lang="scss">
.real-time-component-list {
  height: 35%;
}
</style>
