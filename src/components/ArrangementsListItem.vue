<template>
  <a class="arrangementItem" :href="arrangement.href" draggable="false" @dragstart.prevent>
    <div class="arrangementContent">
      <div class="arrangementTitles">
        <div class="arrangementTitle">{{ arrangement.title }}</div>
        <div class="arrangementsSubtitle">{{ arrangement.subtitle }}</div>
        <div class="arrangementArtist">{{ arrangement.artist }}</div>
      </div>

      <div class="arrangementMeta">
        <div class="arrangementMetaRow">
          <ArrangementPill
            v-for="(instrument, index) in arrangement.instruments"
            :key="`instrument-${arrangement.id}-${index}`"
            :icon="instrument.icon"
          >
            {{ instrument.label }}
          </ArrangementPill>
        </div>

        <div class="arrangementMetaRow">
          <ArrangementPill
            v-for="(format, index) in arrangement.formats"
            :key="`format-${arrangement.id}-${index}`"
            :icon="format.icon"
          >
            {{ format.label }}
          </ArrangementPill>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import ArrangementPill from './ArrangementPill.vue';

export default {
  name: 'ArrangementsListItem',
  components: {
    ArrangementPill
  },
  props: {
    arrangement: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.arrangementItem {
  --padding: 30px;

  display: flex;
  width: min(960px, 100%);
  background-color: var(--surface);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  color: var(--text);
  text-decoration: none;
  box-sizing: border-box;
  transition:
    background-color var(--transition-fast) var(--transition-ease),
    border-color var(--transition-fast) var(--transition-ease),
    transform var(--transition-fast) var(--transition-ease),
    box-shadow var(--transition-fast) var(--transition-ease);
  user-select: text;
  -webkit-user-select: text;
}

.arrangementItem:hover {
  background-color: var(--surface-hover);
  transform: translateY(-1px);
  box-shadow: 0 8px 22px var(--shadow);
}

.arrangementContent {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  min-width: 0;
  padding: var(--padding);
}

.arrangementTitles {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 4px;
  min-width: 0;
  color: var(--text);
}

.arrangementTitle {
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
  overflow-wrap: anywhere;
}

.arrangementsSubtitle {
  font-size: 18px;
  font-style: italic;
  font-weight: 200;
}

.arrangementArtist {
  font-size: 22px;
  color: var(--secondary);
  font-weight: 600;
}

.arrangementMeta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.arrangementMetaRow {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
}
</style>
