<!--
* new page
* @author:loveWei0
* @since:2023-12-13
* index.vue
-->
<template>
  <div id="editor" class="editor">
    <Grid :is-dark-mode="isDarkMode" />{{ isDarkMode }}
    fdsf
    <p>dfsd</p>
    <p>dfsd</p>
    <p>dfsd</p>
    <p>dfsd</p>
    <p>dfsd</p>
    <p>dfsd</p>
    <p>dfsd</p>
    <p>dfsd</p>
    <p>dfsd</p>
    <p>dfsd</p>
  </div>
</template>

<script setup>
import Grid from './Grid.vue'
import { useStore } from '@/store/index.js'
import { storeToRefs } from 'pinia'
const store = useStore()
const { isDarkMode } = storeToRefs(store)
console.log(isDarkMode)
</script>

<style scoped lang="scss">
.editor {
  position: relative;
  background-color: #fff;
  margin: auto;
}
</style>
