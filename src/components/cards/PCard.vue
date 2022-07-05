<script setup lang="ts">
  interface Props {
    backgroundColor?: string,
    outlined?: boolean,
  }
  const props = withDefaults(defineProps<Props>(),{
    backgroundColor: 'bg-white',
    outlined: false,
  })
</script>
<template>
  <div
    class="shadow-sm rounded d-flex gap-3 p-3 p-card"
    :class="[props.backgroundColor, props.outlined?'border':'']"
  >
    <slot></slot>
  </div>
</template> 
<style lang="scss" scoped>
  .p-card {
    &.border{
      border: 1px solid var(--bs-gray-100)!important;
    }
  }
</style>