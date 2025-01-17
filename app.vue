<script lang="ts" setup>
import { tabs } from "~/settings/tabs";
import BasicTabs from "~/components/basic/BasicTabs.vue";
import { useStickersStore } from "~/stores/stickersStore";

const stickersStore = useStickersStore();
const { loadDatabase } = stickersStore;

onMounted(() => {
  loadDatabase();
});
</script>
<template>
  <div class="app-container">
    <BasicTabs :items="tabs" />
    <NuxtPage />
  </div>
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
