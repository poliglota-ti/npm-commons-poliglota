<script lang="ts" setup>
  import { useVModel } from '@/composables'

  const props = defineProps<{
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    toast?: boolean
  }>()
  const model = useVModel<boolean>()
</script>

<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      @input="model = !model"
      :checked="model"
    >
    <!-- <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
    </label> -->
  </div>
</template>

<style lang="scss" scoped>
</style>