<template>
  <div class="arrangementsView">
    <Hero
      title="Arranjos"
      description="Nesta pagina voce podera encontrar todos os arranjos disponiveis para compra."
      :image="sheetMusicImage"
    />

    <div class="arrangementsViewToolbar">
      <button
        type="button"
        class="appButtonLink arrangementsFilterButton"
        :aria-pressed="showFavoritesOnly"
        @click="toggleFavoritesFilter"
      >
        {{ showFavoritesOnly ? "Mostrar todos os arranjos" : "Mostrar somente favoritos" }}
        ({{ favoriteIds.length }})
      </button>
    </div>

    <p v-if="showFavoritesOnly && !displayedArrangements.length" class="arrangementsEmptyState">
      Voce ainda nao favoritou nenhum arranjo.
    </p>

    <div v-else class="arrangementsViewList">
      <div class="arrangementsColumn">
        <ArrangementsListItem
          v-for="arrangement in leftColumnArrangements"
          :key="arrangement.id"
          :arrangement="arrangement"
        />
      </div>

      <div class="arrangementsColumn">
        <ArrangementsListItem
          v-for="arrangement in rightColumnArrangements"
          :key="arrangement.id"
          :arrangement="arrangement"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import ArrangementsListItem from '../components/ArrangementsListItem.vue';
import arrangementsData from '@/data/arrangements.json';
import sheetMusicImage from '@/assets/img/sheetmusic.jpg';
import {
  FAVORITE_ARRANGEMENTS_STORAGE_KEY,
  readFavoriteArrangementIds
} from '@/composables/useFavoriteArrangements';

export default {
  name: 'ArrangementsView',
  components: {
    Hero,
    ArrangementsListItem
  },
  data() {
    return {
      arrangements: arrangementsData,
      sheetMusicImage,
      showFavoritesOnly: false,
      favoriteIds: readFavoriteArrangementIds()
    };
  },
  computed: {
    displayedArrangements() {
      if (!this.showFavoritesOnly) {
        return this.arrangements;
      }

      const favoriteIdsSet = new Set(this.favoriteIds);
      return this.arrangements.filter((arrangement) => favoriteIdsSet.has(arrangement.id));
    },
    leftColumnArrangements() {
      return this.displayedArrangements.filter((_, index) => index % 2 === 0);
    },
    rightColumnArrangements() {
      return this.displayedArrangements.filter((_, index) => index % 2 !== 0);
    }
  },
  mounted() {
    window.addEventListener('storage', this.handleStorageChange);
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.handleStorageChange);
  },
  methods: {
    toggleFavoritesFilter() {
      this.favoriteIds = readFavoriteArrangementIds();
      this.showFavoritesOnly = !this.showFavoritesOnly;
    },
    handleStorageChange(event) {
      if (event.key && event.key !== FAVORITE_ARRANGEMENTS_STORAGE_KEY) {
        return;
      }

      this.favoriteIds = readFavoriteArrangementIds();
    }
  }
};
</script>

<style scoped>
.arrangementsView {
  margin: 0;
  border: 0;
  padding: 0;

  .arrangementsViewToolbar {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    margin: 12px 0 0;
  }

  .arrangementsFilterButton {
    cursor: pointer;
    font-weight: 600;
    border: 1px solid var(--border-subtle);
  }

  .arrangementsEmptyState {
    margin: 28px auto;
    max-width: 640px;
    padding: 14px 16px;
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    background: var(--tone-10, var(--surface));
    font-weight: 500;
  }

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
