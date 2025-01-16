<script setup lang="ts">
import type { PropType } from "vue";
import type { ITab } from "~/types";
import type { RouteRecordNameGeneric } from "#vue-router";

const route = useRoute();

defineProps({
  items: {
    type: Array as PropType<ITab[]>,
    required: true,
  },
});

const currentTabName = computed<RouteRecordNameGeneric>(() => {
  // This is simplified case when the tab name is equal to the route name.
  return route.name;
});
</script>

<template>
  <div class="tabs">
    <RouterLink
      v-for="tab in items"
      class="tab"
      :class="{ 'tab--active': tab.name === currentTabName }"
      :to="{ name: tab.name }"
    >
      {{ tab.label }}
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
@use "@/scss/tabs";
.tabs {
  display: flex;
  gap: tabs.$space;
  margin-bottom: 30px;
}

.tab {
  padding: tabs.$padding;
  background: tabs.$tab-background;
  border-radius: tabs.$border-radius;
  cursor: pointer;
  text-decoration: underline;
  color: black;
  user-select: none;

  &--active {
    text-decoration: none;
  }
}

.tab:hover {
  text-decoration: none;
}
</style>
