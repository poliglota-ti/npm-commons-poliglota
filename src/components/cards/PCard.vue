<script setup lang="ts">
  import { computed } from "vue"
  interface Props {
    backgroundColor?: string
    outlined?: boolean
    paddingClass?: string
    shadow?: 'none' | 'sm' | 'md' | 'lg'
  }
  const props = withDefaults(defineProps<Props>(),{
    backgroundColor: 'bg-white',
    outlined: false,
    paddingClass: 'p-3',
    shadow: 'sm'
  })
  const shadowComputed = computed(() =>`shadow-${props.shadow ?? 'md'}`)
</script>
<template>
  <div
    class="shadow-sm rounded d-flex gap-3 p-card"
    :class="[props.backgroundColor, props.paddingClass, props.outlined && 'border', shadowComputed]"
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