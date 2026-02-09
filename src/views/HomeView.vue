<template>
  <div class="home">
    <Hero title="Início" description="Bem-vindo ao meu site" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'

export default {
  name: 'HomeView',
  components: {
    Hero
  }
}
</script>

