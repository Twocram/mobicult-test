<template>
  <section class="cards-container">
    <h1 class="cards-title">Карточки пользователя</h1>
    <v-card-list :cards v-if="cards.length" />
    <div v-else class="cards-empty">Список пуст</div>
  </section>
</template>

<script setup lang="ts">
import vCardList from "~/components/card-list/v-card-list.vue";
import { useCardStore } from "~/stores/card";
import type { Card } from "~/types/card";

useHead({
  title: "Карточки",
  meta: [
    {
      name: "description",
      content: "Карточки пользователя",
    },
  ],
});

const cardStore = useCardStore();

const cards = computed<Card[]>(() => cardStore.cards);

onMounted(() => {
  cardStore.loadCards();
});
</script>

<style scoped lang="scss">
.cards {
  &-title {
    font-size: 24px;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  &-empty {
    font-size: 20px;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>
