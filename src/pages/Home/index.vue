<!--
* new page
* @author:loveWei0
* @since:2023-12-08
* index.vue
-->
<template>
  <div class="home">
    <Toolbar />
  </div>
</template>

<script setup>
// component
import Toolbar from '@/components/Toolbar.vue'
</script>

<style lang="scss">
.home {
  height: 100vh;
  width: 100px;
  background: var(--main-bg-color);
}
</style>
