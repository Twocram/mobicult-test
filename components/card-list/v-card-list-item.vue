<template>
  <div class="card-list__item">
    <div class="card-list__item-title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string;
};

defineProps<Props>();
</script>

<style scoped lang="scss">
.card-list__item {
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &-title {
    font-size: 16px;
  }
}
</style>
