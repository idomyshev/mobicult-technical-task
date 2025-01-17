<script lang="ts" setup>
import { tabs } from "~/settings/tabs";
import BasicTabs from "~/components/basic/BasicTabs.vue";
import { useStickersStore } from "~/stores/stickersStore";
import { storageKey } from "~/settings/storage";
import BasicLoader from "~/components/basic/BasicLoader.vue";

const stickersStore = useStickersStore();
const { loadDatabase } = stickersStore;

onMounted(() => {
  loadDatabase();
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey) {
      loadDatabase();
    }
  });
});
</script>
<template>
  <div class="app-container">
    <BasicTabs :items="tabs" />
    <NuxtPage />
  </div>
  <BasicLoader />
</template>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  box-sizing: border-box;
  padding: 10px;
}
</style>
