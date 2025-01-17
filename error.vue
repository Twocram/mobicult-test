<template>
  <section class="error-container">
    <div class="error-content">
      <h1 v-if="error.statusCode === 404" class="error-title">
        404 - Страница не найдена
      </h1>
      <h1 v-else class="error-title">Ошибка {{ error.statusCode }}</h1>

      <ui-v-button variant="primary">
        <nuxt-link class="error-link" to="/">На главную</nuxt-link>
      </ui-v-button>
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {
  error: {
    statusCode: number;
  };
};

defineProps<Props>();
</script>

<style lang="scss" scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
}

.error-content {
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.error-message {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 30px;
}

.error-link {
  color: #fff;
}
</style>
