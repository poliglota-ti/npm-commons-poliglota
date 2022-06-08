<script setup lang="ts">
  interface Props {
    backgroundColor?: string,
  }
  const props = withDefaults(defineProps<Props>(),{
    backgroundColor: 'bg-white'
  })
</script>
<template>
  <div
    class="shadow-sm rounded d-flex gap-3 p-3"
    :class="[props.backgroundColor]"
  >
    <slot></slot>
  </div>
</template> 