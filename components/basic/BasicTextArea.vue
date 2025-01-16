<script setup lang="ts">
const data = defineModel<string>();

defineProps({
  height: {
    type: String,
    default: "150px",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="basic-text-area">
    <textarea
      v-model="data"
      :style="{
        height,
      }"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped lang="scss">
.basic-text-area {
  textarea {
    font-size: 1rem;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
