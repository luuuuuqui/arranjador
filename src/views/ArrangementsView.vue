<template>
  <div class="arrangements">
    <Hero title="Arranjos" description="Aqui voce pode encontrar todos os arranjos disponiveis para compra." />
    <div class="arrangementsList">
      <ArrangementsListItem
        v-for="arrangement in arrangements"
        :key="arrangement.id"
        :arrangement="arrangement"
      />
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import ArrangementsListItem from '../components/ArrangementsListItem.vue';
import arrangementsData from '@/data/arrangements.json';

export default {
  name: 'ArrangementsView',
  components: {
    Hero,
    ArrangementsListItem
  },
  data() {
    return {
      arrangements: arrangementsData
    };
  }
};
</script>

<style scoped>
.arrangementsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px;
}
</style>
