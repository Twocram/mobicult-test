<template>
  <input class="v-input" :placeholder :type v-model="modelValue" />
</template>

<script setup lang="ts">
type InputType = "password" | "text";

type Props = {
  type?: InputType;
  placeholder?: string;
};

const modelValue = defineModel();

withDefaults(defineProps<Props>(), {
  type: "text",
});
</script>

<style scoped lang="scss">
.v-input {
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  background-color: #fff;
  width: 100%;

  &::placeholder {
    color: #808080;
  }

  &:focus {
    border: 1px solid #202fff;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 12px;
  }
}
</style>
