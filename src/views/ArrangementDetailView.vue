<template>
  <main class="arrangementDetailView">
    <section v-if="arrangement" class="arrangementDetailCard">
      <div class="arrangementTop">
        <div class="arrangementLeftColumn">
          <div class="arrangementThumbBox">
            <img class="arrangementThumb" :src="arrangement.thumb" :alt="`Capa de ${arrangement.title}`">
          </div>
        </div>

        <div class="arrangementRightColumn">
          <div class="arrangementTitles">
            <h1 class="arrangementTitle">{{ arrangement.title }}</h1>
            <p class="arrangementsSubtitle">{{ arrangement.subtitle }}</p>
            <p class="arrangementArtist">{{ arrangement.artist }}</p>
          </div>
          <p class="arrangementDescription">{{ arrangement.description }}</p>
          <p class="arrangementPrice">R$ {{ arrangement.price }}</p>
          <button
            type="button"
            class="favoriteToggle appButtonLink"
            :class="{ favoriteToggleActive: isFavorite }"
            :aria-pressed="isFavorite"
            @click="toggleFavorite"
          >
            {{ isFavorite ? "Remover dos favoritos" : "Favoritar arranjo" }}
          </button>
        </div>
      </div>

      <div class="arrangementBottom">
        <div class="arrangementMetaSection">
          <h2>Instrumentos:</h2>
          <ul class="arrangementList">
            <li v-for="(instrument, index) in arrangement.instruments" :key="`instrument-${arrangement.id}-${index}`">
              {{ instrument.label }}
            </li>
          </ul>
        </div>
        <div class="arrangementMetaSection">
          <h2>Formatos disponíveis:</h2>
          <ul class="arrangementList">
            <li v-for="(format, index) in arrangement.formats" :key="`format-${arrangement.id}-${index}`">
              {{ format.label }}
            </li>
          </ul>
        </div>
      </div>

      <router-link to="/arranjos" class="backLink appButtonLink">Voltar para arranjos</router-link>
    </section>

    <section v-else class="arrangementDetailCard">
      <h1>Arranjo nao encontrado</h1>
      <p>O arranjo com id {{ id }} nao existe no catalogo.</p>
      <router-link to="/arranjos" class="backLink appButtonLink">Voltar para arranjos</router-link>
    </section>
  </main>
</template>

<script>
import arrangementsData from "@/data/arrangements.json";
import {
  isFavoriteArrangement,
  toggleFavoriteArrangement,
} from "@/composables/useFavoriteArrangements";

export default {
  name: "ArrangementDetailView",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    arrangementId() {
      return Number(this.id);
    },
    arrangement() {
      return arrangementsData.find((item) => item.id === this.arrangementId);
    }
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  watch: {
    arrangementId: {
      immediate: true,
      handler() {
        this.updateFavoriteState();
      },
    },
  },
  methods: {
    updateFavoriteState() {
      if (!this.arrangement) {
        this.isFavorite = false;
        return;
      }

      this.isFavorite = isFavoriteArrangement(this.arrangementId);
    },
    toggleFavorite() {
      if (!this.arrangement) {
        return;
      }

      const updatedFavoriteIds = toggleFavoriteArrangement(this.arrangementId);
      this.isFavorite = updatedFavoriteIds.includes(this.arrangementId);
    },
  }
};
</script>

<style scoped>
.arrangementDetailView {
  display: flex;
  justify-content: center;
  padding: 28px 16px;
}

.arrangementDetailCard {
  width: min(1080px, 100%);
  min-height: 560px;
  text-align: left;
  padding: 24px;
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  background-color: var(--tone-10, var(--surface));
  color: var(--text);
  box-sizing: border-box;
  transition:
    background-color var(--transition-fast) var(--transition-ease),
    border-color var(--transition-fast) var(--transition-ease),
    transform var(--transition-fast) var(--transition-ease),
    box-shadow var(--transition-fast) var(--transition-ease);
}

.arrangementTop {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.arrangementLeftColumn {
  width: 190px;
  flex-shrink: 0;
}

.arrangementThumbBox {
  width: 160px;
  height: 170px;
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  background: var(--tone-15, var(--surface-hover));
  overflow: hidden;
}

.arrangementThumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrangementRightColumn {
  flex: 1;
  min-width: 0;
}

.arrangementTitles {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 2px;
  min-width: 0;
  color: var(--text);
}

.arrangementTitle {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
  overflow-wrap: anywhere;
}

.arrangementsSubtitle {
  margin: 0;
  font-size: 18px;
  font-style: italic;
  font-weight: 200;
}

.arrangementArtist {
  margin: 0;
  font-size: 22px;
  color: var(--secondary);
  font-weight: 600;
}

.arrangementDescription {
  margin-top: 8px;
  font-size: 18px;
  line-height: 1.45;
}

.arrangementPrice {
  margin-top: 6px;
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
}

.favoriteToggle {
  margin-top: 10px;
  font-weight: 600;
}

.favoriteToggle.favoriteToggleActive {
  background-color: var(--accent);
  color: var(--background);
  border-color: transparent;
}

.arrangementBottom {
  margin-top: 10px;
  width: 190px;
}

.arrangementMetaSection {
  margin-top: 12px;
}

.arrangementMetaSection h2 {
  margin: 0 0 4px 0;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.4px;
}

.arrangementList {
  list-style: disc;
  margin: 0;
  padding-left: 20px;
}

.arrangementList li {
  margin: 2px 0;
  font-size: 18px;
}

.backLink {
  margin-top: 18px;
  font-weight: 600;
}

:global(body.lightmode) .arrangementDetailCard {
  background-color: color-mix(in srgb, var(--background) 94%, var(--text));
  border-color: color-mix(in srgb, var(--background) 78%, var(--text));
}

:global(body.lightmode) .arrangementDetailCard:hover {
  background-color: color-mix(in srgb, var(--background) 90%, var(--text));
}

:global(body.lightmode) .arrangementThumbBox {
  background-color: color-mix(in srgb, var(--background) 88%, var(--text));
  border-color: color-mix(in srgb, var(--background) 76%, var(--text));
}

@media (max-width: 960px) {
  .arrangementDetailCard {
    min-height: auto;
  }

  .arrangementTop {
    flex-direction: column;
  }

  .arrangementLeftColumn,
  .arrangementBottom {
    width: 100%;
  }

  .arrangementThumbBox {
    width: 100%;
    max-width: 280px;
    height: 220px;
  }

  .arrangementTitle {
    font-size: 28px;
  }

  .arrangementsSubtitle,
  .arrangementArtist,
  .arrangementDescription,
  .arrangementPrice,
  .arrangementMetaSection h2,
  .arrangementList li {
    font-size: 18px;
  }
}
</style>
