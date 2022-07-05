<script lang="ts" setup>
  import { computed } from "vue"

  const props = defineProps<{
    stars: number
    score: number
    size?: string
    opacity?: number
  }>()

  const completeStars = computed(() => Math.floor(props.score))

  const halfStars = computed(() => props.score % 1 === 0 ? 0 : 1 )

  const emptyStars = computed(() => Math.floor(props.stars - props.score))

  const styleBind = computed(() => {
    return {
      fontSize: props.size,
      opacity: props.opacity ?? 1
    }
  })

</script>

<template>
  <span>
    <fa
      v-for="idx in completeStars"
      :key="idx*2"
      :icon="['fas', 'star']"
      :style="styleBind"
    /> <!-- completas -->
    <fa
      v-for="idx in halfStars"
      :key="idx*3"
      :icon="['fas', 'star-half-alt']"
      :style="styleBind"
    /> <!-- medias -->
    <fa
      v-for="idx in emptyStars"
      :key="idx*4"
      :icon="['far', 'star']"
      :style="styleBind"
    /> <!-- vacias -->
  </span>
</template>

<style lang="scss" scoped>
  svg {
    color: #F7AC11;
  }
</style>