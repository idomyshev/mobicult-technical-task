<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  label: {
    type: String,
  },
  icon: {
    type: Object as PropType<any>,
  },
  width: {
    type: String,
    default: "20px",
  },
  height: {
    type: String,
    default: "20px",
  },
});
</script>

<template>
  <div class="basic-button" :class="{ 'icon-button': !!icon }">
    <template v-if="label">{{ label }}</template>
    <component :is="icon" :style="{ width, height }" />
  </div>
</template>

<style scoped lang="scss">
.basic-button {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 5px;
  border: 1px solid #111;
  color: #111;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
}

.icon-button {
  border: 0;
  padding: 2px;
}

.basic-button:hover {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.icon-button:hover {
  box-shadow: none;
}
</style>
