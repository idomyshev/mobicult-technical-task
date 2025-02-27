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
  disabled: {
    type: Boolean,
  },
  primary: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="basic-button"
    :class="{ 'icon-button': !!icon, disabled: disabled, primary }"
  >
    <template v-if="label">{{ label }}</template>
    <component :is="icon" :style="{ width, height }" />
  </div>
</template>

<style scoped lang="scss">
@use "@/scss/colors";
@use "@/scss/typography";

.basic-button {
  @include typography.body-s;
  display: inline-block;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid colors.$basic-button-secondary-border-color;
  color: colors.$basic-button-text-color;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
  transition:
    box-shadow 0.3s ease,
    opacity 0.3s ease;
}

.icon-button {
  border: 0;
  padding: 2px;
}

.basic-button:hover {
  box-shadow: 3px 3px 10px colors.$basic-button-secondary-shadow-color;
  opacity: 0.95;
}

.primary:hover {
  box-shadow: 3px 3px 10px colors.$basic-button-primary-shadow-color;
}

.icon-button:hover {
  box-shadow: none;
  opacity: 0.5;
}

.disabled,
.disabled:hover {
  opacity: 0.5;
  cursor: initial;
  box-shadow: none;
}

.primary {
  border-color: colors.$basic-button-primary-border-color;
}
</style>
