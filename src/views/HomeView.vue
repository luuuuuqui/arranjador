<template>
  <HeaderBlur />
  <div class="home">
    <Hero title="Início" description="Bem-vindo ao meu site" image="https://via.placeholder.com/150" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import HeaderBlur from '@/components/HeaderBlur.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderBlur,
    Hero
  }
}
</script>
