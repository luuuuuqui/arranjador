<template>
  <AppHeader :blur="$route.meta.useBlurHeader" />
  <router-view />
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}
</style>
