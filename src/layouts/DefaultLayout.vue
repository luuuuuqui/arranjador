<template>
  <div class="default-layout">
    <AppHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>
