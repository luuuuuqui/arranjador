<template>
  <div class="arrangementsView">
    <Hero title="Arranjos" description="Nesta página você poderá encontrar todos os arranjos disponiveis para compra."
      :image="sheetMusicImage" />
    <div class="arrangementsViewList">
      <div class="arrangementsColumn">
        <ArrangementsListItem v-for="arrangement in leftColumnArrangements" :key="arrangement.id"
          :arrangement="arrangement" />
      </div>

      <div class="arrangementsColumn">
        <ArrangementsListItem v-for="arrangement in rightColumnArrangements" :key="arrangement.id"
          :arrangement="arrangement" />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import ArrangementsListItem from '../components/ArrangementsListItem.vue';
import arrangementsData from '@/data/arrangements.json';
import sheetMusicImage from '@/assets/img/sheetmusic.jpg';

export default {
  name: 'ArrangementsView',
  components: {
    Hero,
    ArrangementsListItem
  },
  data() {
    return {
      arrangements: arrangementsData,
      sheetMusicImage
    };
  },
  computed: {
    leftColumnArrangements() {
      return this.arrangements.filter((_, index) => index % 2 === 0);
    },
    rightColumnArrangements() {
      return this.arrangements.filter((_, index) => index % 2 !== 0);
    }
  }
};
</script>

<style scoped>
.arrangementsView {
  margin: 0;
  border: 0;
  padding: 0;

  .arrangementsViewList {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin: auto;
    padding: 40px 0;
    max-width: 1920px;
  }

  .arrangementsColumn {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 1680px) {
    .arrangementsViewList {
      flex-direction: column;
      align-items: center;
      padding: 24px 0;
    }

    .arrangementsColumn {
      width: 100%;
      align-items: center;
    }
  }
}
</style>
