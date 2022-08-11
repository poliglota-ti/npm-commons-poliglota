<script lang="ts" setup>
  import { useVModel } from '@/composables'
import { computed } from 'vue';

  interface Props {
    modelValue: boolean
    label?: string
  }
  const props = withDefaults(defineProps<Props>(),{
    modelValue: false
  }) 
  const model = useVModel<boolean>()
  const elementId = computed(() => `checkbox_${Math.floor(Math.random() * 100000) + 1}`)
</script>

<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      @input="model = !model"
      :checked="model"
      :id="elementId"
    >
    <label
      v-if="props.label"
      class="form-check-label"
      :for="elementId"
    >
      {{ props.label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
</style>