<template>
  <div class="card-list">
    <v-card-list-item
      v-for="card in cards"
      :key="card.id"
      :title="card.title"
    />
  </div>
</template>

<script setup lang="ts">
import type { Card } from "~/types/card";

import vCardListItem from "./v-card-list-item.vue";
type Props = {
  cards: Card[];
};

defineProps<Props>();
</script>

<style scoped lang="scss">
.card-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
