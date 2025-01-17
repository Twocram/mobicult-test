<template>
  <div class="settings-content__cards-list">
    <v-settings-card-list-item
      v-for="card in cards"
      :key="card.id"
      v-bind="card"
    />
  </div>
</template>

<script setup lang="ts">
import type { Card } from "~/types/card";
import vSettingsCardListItem from "./v-settings-card-list-item.vue";

type Props = {
  cards: Card[];
};

defineProps<Props>();
</script>

<style scoped lang="scss">
.settings {
  &-content {
    &__cards {
      &-list {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(1, 1fr);
        margin-bottom: 24px;

        &-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }
    }
  }
}
</style>
