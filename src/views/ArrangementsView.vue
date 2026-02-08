<template>
  <HeaderBlur />
  <div class="arrangements">
    <Hero title="Arranjos" description="Aqui você pode encontrar todos os arranjos disponíveis para compra." image="https://via.placeholder.com/150" />
    <div class="arrangements-list">
      <arrangements-list-item v-for="arrangement in arrangements" :key="arrangement.id" :arrangement="arrangement" />
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import ArrangementsListItem from '../components/ArrangementsListItem.vue';
import HeaderBlur from '../components/HeaderBlur.vue';
export default {
    name: 'ArrangementsView',
    components: {
        Hero,
        ArrangementsListItem,
        HeaderBlur
    },
    data() {
        return {
            arrangements: [
                { id: 1, title: 'Arranjo 1', description: 'Descrição do arranjo 1', image: 'https://via.placeholder.com/150' },
                { id: 2, title: 'Arranjo 2', description: 'Descrição do arranjo 2', image: 'https://via.placeholder.com/150' },
                { id: 3, title: 'Arranjo 3', description: 'Descrição do arranjo 3', image: 'https://via.placeholder.com/150' }
            ]
        }
    }
}
</script>

<style scoped>
.arrangements {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>