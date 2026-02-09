<template>
  <section class="heroSection" :style="{ backgroundImage }">
    <div class="heroContent">
      <h1 class="heroTitle">{{ title }}</h1>
      <p class="heroDescription">{{ description }}</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const picsumRandomImage = 'https://picsum.photos/1920/1080'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: picsumRandomImage
  }
})

const backgroundImage = computed(() => {
  const hasCustomImage = typeof props.image === 'string' && props.image.trim().length > 0

  if (!hasCustomImage) {
    return `url("${picsumRandomImage}")`
  }

  // Keeps the default image as a fallback if an external URL fails.
  return `url("${props.image}"), url("${picsumRandomImage}")`
})
</script>

<style scoped>
.heroSection {
  position: relative;

  width: 100%;
  height: 100vh;
  max-height: 1080px;
  min-height: 600px;
  /* fallback para telas menores */

  /* Background com a imagem de partitura */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Overlay escuro para melhor contraste do texto */
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: color-mix(in srgb, var(--background) 80%, transparent);
  }

  .heroContent {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .heroTitle {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--accent);
    /* #11ee78 - verde brilhante */
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.02em;
  }

  .heroDescription {
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    color: var(--text);
    /* #f3f7f5 - branco/cinza claro */
    margin: 0;
    line-height: 1.5;
    opacity: 0.9;
  }
}
</style>
