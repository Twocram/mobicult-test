<template>
  <div class="settings-content__cards-list-item">
    <span class="settings-content__cards-list-item-id">ID {{ id }}</span>
    <ui-v-input v-model="localTitle" placeholder="Введите название карточки" />

    <ui-v-button variant="danger" @click="deleteCardHandler(id)">
      Удалить
    </ui-v-button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  id: number;
  title: string;
};

const cardStore = useCardStore();

const props = defineProps<Props>();

const localTitle = ref(props.title);

function deleteCardHandler(id: number) {
  cardStore.deleteCard(id);
}

watch(localTitle, (v) => {
  cardStore.editCard(props.id, v);
});
</script>

<style scoped lang="scss">
.settings {
  &-content {
    &__cards {
      &-list {
        &-item {
          display: flex;
          align-items: center;
          gap: 8px;

          &-id {
            font-weight: bold;
            white-space: nowrap;
          }

          &-delete {
            cursor: pointer;
            color: red;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
