<script setup lang="ts">
  // import SpecialUploader from "./components/special-uploader.vue";
  import { $ref } from "vue/macros"
  const randomImg = "https://source.unsplash.com/random"
  const text = $ref("sasdsad")

  let username = $ref("") 
</script>

<template>
  <router-view></router-view>
</template>

<!-- <style lang="scss">
  @import "@/assets/scss/app.scss";
</style> -->
