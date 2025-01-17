<template>
  <button :type class="v-button" :class="`v-button--${variant}`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type ButtonType = "button" | "submit" | "reset";
type ButtonVariant = "success" | "primary" | "danger" | "secondary";

type Props = {
  type?: ButtonType;
  variant?: ButtonVariant;
};

withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "primary",
});
</script>

<style scoped lang="scss">
.v-button {
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  background-color: #e8e8e8;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 8px 12px;
  }
}

.v-button--success {
  background-color: #00d600;
  color: #fff;

  &:hover {
    background-color: #00cc00;
  }
}

.v-button--primary {
  background-color: #202fff;
  color: #fff;

  &:hover {
    background-color: #0000ff;
  }
}

.v-button--danger {
  background-color: #ff0000;
  color: #fff;

  &:hover {
    background-color: #cc0000;
  }
}

.v-button--secondary {
  background-color: #fff;
  color: #000;

  &:hover {
    background-color: #e8e8e8;
  }
}
</style>
