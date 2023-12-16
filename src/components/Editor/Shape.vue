<!--
* new page Shape
* @author:loveWei0
* @since:2023-12-14
* Shape.vue
-->
<template>
<div class="shape"></div>
</template>

<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  element: {
    required: true,
    type: Object,
    default: () => ({}),
  },
  defaultStyle: {
    required: true,
    type: Object,
    default: () => ({}),
  },
  index: {
    required: true,
    type: [Number, String],
    default: 0,
  },
})
</script>

<style scoped lang="scss">
.shape {
  position: absolute;
  &:hover {
    cursor: move;
  }
}
</style>
