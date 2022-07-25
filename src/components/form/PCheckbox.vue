<script lang="ts" setup>
  import { useVModel } from '@/composables'

  interface Props {
    modelValue: boolean
  }
  const props = withDefaults(defineProps<Props>(),{
    modelValue: false
  }) 
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