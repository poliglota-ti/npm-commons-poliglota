<script setup lang="ts">
  import { ref } from 'vue';
  const props = defineProps<{
    src?: string | null
    initials?: string | null
    tooltipText?: string,
    bordered?: boolean,
  }>()

  let isImageError = ref(false)

  const onImageError = (e: Event) => {
    isImageError.value = true
  }
</script>

<template>
  <img
    v-if="props.src && !isImageError"
    v-tooltip.top="props.tooltipText"
    :src="props.src"
    alt="avatar"
    class="avatar me-2 classmate-img"
    :class="`${props.bordered? 'bordered': ''}`"
    data-testid="avatar-image"
    @error="onImageError"
  >
  <div 
    v-else
    v-tooltip.top="props.tooltipText"
    class="initials"
    :class="`${props.bordered? 'bordered': ''}`"
    data-testid="avatar-initials"
  >
    {{ props.initials }}
  </div>
</template>

<style lang="scss" scoped>
  .initials {
    text-transform: uppercase;
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .bordered{
    border: 1px solid #F7AC11;
  }
</style>
