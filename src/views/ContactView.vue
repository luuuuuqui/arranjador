<template>
  <div class="contactView">
    <Hero title="Contato" description="Aqui você pode entrar em contato comigo." :image="contactImage" />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import contactImage from '@/assets/img/contact.jpg';

export default {
  name: 'ContactView',
  components: {
    Hero
  },
  data() {
    return {
      contactImage
    };
  }
}
</script>

