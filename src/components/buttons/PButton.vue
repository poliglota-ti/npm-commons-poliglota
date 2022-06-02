<script setup lang="ts">
  import { useAttrs } from "vue"

  interface Props {
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link"
    isOutline?: boolean
    icon?: string[] | null
    text?: string | null
    block?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    isOutline: false,
    icon: null,
    text: null,
    block: false,
  })

  const { href, disabled } = useAttrs()
</script>

<template>
  <a
    v-if="typeof href === 'string'"
    :href="href"
    class="btn"
    :class="[props.isOutline ? `btn-outline-${props.type}` : `btn-${props.type}`, props.block ? 'w-100' : '']"
    :ariaDisabled="disabled"
    role="button"
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    class="btn"
    :class="[props.isOutline ? `btn-outline-${props.type}` : `btn-${props.type}`, props.block ? 'w-100' : '']"
    data-testid="button"
  >
    <slot>
      <fa v-if="props.icon" :icon="props.icon" class="mx-2" />
      <span v-if="props.text">{{ props.text }}</span>
    </slot>
  </button>
</template>
