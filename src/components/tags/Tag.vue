<script lang="ts" setup>
import { computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const props = defineProps<{
    type: 'primary' | 'secondary' | 'success' | 'info' | 'warning',
    text: string,
    prependIcon?: string[]
  }>()

  const tagClasses = computed(() =>[
    `text-${props.type}`,
    `alert-${props.type}`
  ])
</script>
<template>
  <span
    class="fs-sm py-1 px-3"
    :class="tagClasses"
  >
    <slot>
      <FontAwesomeIcon
        v-if="props.prependIcon"
        :icon="props.prependIcon"
        class="me-1"
      />
      {{ props.text }}
    </slot>
  </span>
</template>