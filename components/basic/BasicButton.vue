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
  color: {
    type: String,
    default: "#999",
  },
  disabled: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="basic-button"
    :class="{ 'icon-button': !!icon, disabled: disabled }"
    :style="{ borderColor: color }"
  >
    <template v-if="label">{{ label }}</template>
    <component :is="icon" :style="{ width, height }" />
  </div>
</template>

<style scoped lang="scss">
.basic-button {
  display: inline-block;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid indianred;
  color: #111;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
  font-size: 0.9375rem;
}

.icon-button {
  border: 0;
  padding: 2px;
}

.basic-button:hover {
  box-shadow: 1px 1px 1px #cd5c5c33;
  opacity: 0.95;
}

.icon-button:hover {
  box-shadow: none;
}

.disabled,
.disabled:hover {
  opacity: 0.5;
  cursor: initial;
  box-shadow: none;
}
</style>
