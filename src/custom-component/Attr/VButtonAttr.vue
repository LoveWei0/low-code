<!--
* new page
* @author:loveWei0
* @since:2023-12-12
* Attr.vue
-->
<template>
  <button>{{ propValue }}</button>
</template>

<script setup>
defineProps({
  propValue: {
    type: String,
    default: '',
  }
})
</script>

<style scoped></style>
