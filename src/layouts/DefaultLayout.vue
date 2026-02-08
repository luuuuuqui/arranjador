<template>
  <div class="default-layout">
    <HeaderSmall />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import HeaderSmall from '@/components/HeaderSmall.vue'
</script>