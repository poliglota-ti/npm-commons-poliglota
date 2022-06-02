<script setup lang="ts">
  import { computed } from 'vue'
  import type { NavItem } from "@/interfaces/Nav"

  const props = defineProps<{
    items: NavItem[],
    modelValue: number | string | null
  }>()

  const emit = defineEmits<{
    (e:"update:modelValue", value: number | string | null): void
  }>()

  let model = computed({
    get(){
      return props.modelValue
    },
    set(val: number | string | null){
      emit("update:modelValue", val)
    }
  })

  const changeNavItem = (id: number | string) => {
    if(model.value !== id) model.value = id
  }

</script>
<template>
  <ul
    class="nav d-flex gap-2 overflow-auto mb-3 flex-nowrap"
  >
    <li 
      v-for="item in props.items"
      :key="item.id"
      class="nav-item"
    >
      <span
        class="nav-link pointer"
        :class="{ active: item.id === model }"
        @click="changeNavItem(item.id)"
      >
        {{ item.text }}
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .nav-item .active {
    text-align: center;
    font-weight: bold;

    &::after {
      content: "";
      position: relative;
      margin-top: 5px;
      display: flex;
      width: 80px;
      height: 1px;
      background-color: #dc094e;
    }
  }
  .nav-link {
    color: #636363;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    &.active {
      color: #1f1f1f;
    }
    &.disabled {
      color: #bcbcbc;
    }
  }
</style>