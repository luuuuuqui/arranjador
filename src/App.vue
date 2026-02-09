<template>
  <HeaderSmall v-if="!$route.meta.hideHeader" />
  <HeaderBlur v-if="$route.meta.hideHeader" />
  <router-view />
</template>

<script setup>
import HeaderSmall from "./components/HeaderSmall.vue";
import HeaderBlur from "./components/HeaderBlur.vue";
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}
</style>
