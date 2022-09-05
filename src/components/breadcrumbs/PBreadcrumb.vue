<script lang="ts" setup>
  import { computed } from 'vue'
  import type { BreadcrumbItem } from '@/interfaces/IBreadcrumb'
  import { injectStrict } from "@/utils/inject"
  import type { DashboardRoutesName } from "@/interfaces/IPlugin"

  interface Props {
    items: (BreadcrumbItem | string)[]
    useDashboardItem?: 'coach' | 'student' | 'memberAsCoach' | 'memberAsStudent',
    memberId?: number
  }
  const props = defineProps<Props>()

  const activeIndex = computed(() => (props.items?.length ?? 0) - 1)

  const dashboardRoutesName = injectStrict<DashboardRoutesName>("dashboardRoutesName")

  interface Params {
    [key: string]: string | string[]
  }
  const dashboardItem = computed<BreadcrumbItem>(() => {
    const params: Params = {}
    if(props.memberId) params.id = props.memberId.toString()

    const to = {
      name: props.useDashboardItem ? dashboardRoutesName[props.useDashboardItem] ?? "" : "",
      params
    }
     return { text: 'Dashboard', to }
  })

  const breadcrumbItems = computed(() =>{
    const preItems = [
      ...props.items
    ]
    if(props.useDashboardItem) preItems.unshift(dashboardItem.value)
    return preItems
  })

  const validateDashboardBreadcumb = () => {
    if(!dashboardRoutesName) console.error("you must initialize dashboardRoutesName in plugin options")
  }
  validateDashboardBreadcumb()
</script>

<template>
  <nav
    style="--bs-breadcrumb-divider: '>';"
    aria-label="breadcrumb"
    class="nav-breadcrumbs"
  >
    <ol class="breadcrumb">
      <li
        v-for="(item, index) in breadcrumbItems"
        :key="index"
        class="breadcrumb-item"
        :class="`${index === activeIndex ? 'active' : '' }`"
      >
        <router-link
          v-if="typeof item === 'object' && item.to"
          :to="item.to"
          replace
        >
          {{ item.text }}
        </router-link>
        <span v-else-if="typeof item === 'string'">
          {{ item }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style lang="scss">
  .nav-breadcrumbs {
    .breadcrumb-item {
      a{
        color: var(--bs-info)!important;
        font-weight: 600;
      }
      &.active {
        color: var(--bs-gray-700)!important;
      }
    }
   a{
     text-decoration: none!important;
   }
  }
  </style>