<template>
  <section class="arranjos-hero">
    <div class="arranjos-content">
      <h1 class="arranjos-title">{{ title }}</h1>
      <p class="arranjos-description">{{ description }}</p>
    </div>
  </section>
</template>

<script setup>
// Componente da seção hero de Arranjos
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.arranjos-hero {
  position: relative;

  width: 100vw;
  height: 100vh;
  max-height: 1080px;
  min-height: 600px; /* fallback para telas menores */
  
  /* Background com a imagem de partitura */
  background-image: url('https://media.licdn.com/dms/image/v2/C511BAQGIbAX3Dd2jQw/company-background_10000/company-background_10000/0/1584035667583/testing_hero_cover?e=2147483647&v=beta&t=LLL7EhBE1FVHgvJUPOFKJ4CkU2q6rOpF4W-jvb5-RwM');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Overlay escuro para melhor contraste do texto */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(8, 12, 10, 0.85); /* var(--background) com opacidade */
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.arranjos-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.arranjos-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--accent); /* #11ee78 - verde brilhante */
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.arranjos-description {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: var(--text); /* #f3f7f5 - branco/cinza claro */
  margin: 0;
  line-height: 1.5;
  opacity: 0.9;
}
</style>