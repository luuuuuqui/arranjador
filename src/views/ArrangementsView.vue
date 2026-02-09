<template>
  <div class="arrangementsView">
    <Hero title="Arranjos" description="Nesta página você poderá encontrar todos os arranjos disponiveis para compra." />
    <div class="arrangementsViewList">
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
.arrangementsView {
  .arrangementsViewList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px 0;
    margin: auto;
    padding: 40px 0;
    max-width: 1080px;
  }
}
</style>
