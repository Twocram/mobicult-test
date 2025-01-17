<template>
  <section class="settings-container">
    <h1 class="settings-title">Настройки</h1>

    <div class="settings-content">
      <div class="settings-content__title">
        Текущие карточки: {{ cards.length ? "" : "Список пуст" }}
      </div>

      <v-settings-card-list v-if="cards.length" :cards />

      <div class="settings-content__actions">
        <ui-v-button variant="primary" @click="addCardHandler"
          >Добавить</ui-v-button
        >
        <ui-v-button variant="success" @click="saveCardsHandler"
          >Сохранить</ui-v-button
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import vSettingsCardList from "~/components/card-list/v-settings-card-list.vue";
import { useCardStore } from "~/stores/card";
import type { Card } from "~/types/card";

useHead({
  title: "Настройки",
  meta: [
    {
      name: "description",
      content: "Настройки пользователя",
    },
  ],
});

const cardStore = useCardStore();

const cards = computed<Card[]>(() => cardStore.cards);

onMounted(() => {
  cardStore.loadCards();
});

function saveCardsHandler() {
  cardStore.saveCards();
}

function addCardHandler() {
  const lastCard = cards.value[cards.value.length - 1];

  const cardId = lastCard ? lastCard.id + 1 : 1;

  cardStore.addCard({
    id: cardId,
    title: `Карточка ${cardId}`,
  });
}
</script>

<style scoped lang="scss">
.settings {
  &-title {
    font-size: 24px;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  &-content {
    &__title {
      font-size: 20px;
      margin-bottom: 16px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }

    &__empty {
      margin-bottom: 24px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }

    &__actions {
      display: flex;
      gap: 8px;
    }
  }
}
</style>
