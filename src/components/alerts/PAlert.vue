<script lang="ts" setup>
  const props = defineProps<{
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
    toast?: boolean
  }>()
</script>

<template>
  <div
    v-if="props.toast"
    class="position-fixed bottom-0 start-0 p-3"
    style="z-index: 11"
  >
    <div
      class="alert mb-0"
      :class="{ 'alert-toast': props.toast },`alert-${props.type}`"
      role="alert"
      :data-toast="props.toast"
    >
      <slot />
    </div>
  </div>
  <div
    v-else
    class="alert"
    :class="`alert-${props.type}`"
    role="alert"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.alert-toast{
  max-width: 500px;
}
</style>