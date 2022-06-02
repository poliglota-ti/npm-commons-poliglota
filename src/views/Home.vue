<script setup lang="ts">
  import { computed, ref } from 'vue';
  import PButton from '../components/buttons/PButton.vue';
  import PNav from "../components/navs/PNav.vue";
  import PAvatar from '@/components/avatars/PAvatar.vue';

  import type { NavItem } from '@/interfaces/Nav';
  /* import { defineComponent,defineAsyncComponent } from 'vue'

  const PButton = defineAsyncComponent(() => import ("../components/buttons/PButton.vue")) */
  const navItems = computed(() => [
    { id: 1, text: 'Tab 1'},
    { id: 2, text: 'Tab 2'},
    { id: 3, text: 'Tab 3'},
    { id: 4, text: 'Tab 4'},
    { id: 5, text: 'Tab 5'}
  ])
  const currentNav = ref(1)
</script>

<template>
  <PButton type="primary">World</PButton>
  <div class="d-flex row px-4">
    {{ currentNav }}
    <PNav :items="navItems" v-model="currentNav"></PNav>
    <PAvatar initials="JV"></PAvatar>
  </div>
</template>
