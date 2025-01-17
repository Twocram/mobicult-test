<template>
  <header class="header-container">
    <nuxt-link to="/">
      <img src="/public/logo.gif" alt="logo" class="header-logo" />
    </nuxt-link>

    <nav class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__list-item" v-for="link in headerLinks">
          <nuxt-link class="header-nav__list-item__link" :to="link.to">{{
            link.title
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
type HeaderLink = {
  title: string;
  to: string;
};

const headerLinks = reactive<HeaderLink[]>([
  {
    title: "Настройки",
    to: "/settings",
  },
]);
</script>

<style scoped lang="scss">
.header {
  &-container {
    width: 100%;
    height: 64px;
    display: flex;
    border-bottom: 1px solid #d7d7d7;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    position: sticky;
    top: 0;
    z-index: 2;
    background: #fff;
  }

  &-logo {
    width: 102px;

    @media screen and (max-width: 768px) {
      width: 80px;
    }
  }

  &-nav {
    &__list {
      &-item {
        &__link {
          color: #000;
          &:hover {
            text-decoration: underline;
          }

          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
