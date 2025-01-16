<script lang="ts" setup>
import { tabs } from "~/settings/tabs";
import Tabs from "~/components/Tabs.vue";
import { useStickersStore } from "~/stores/stickersStore";

const stickersStore = useStickersStore();
const { loadDatabase } = stickersStore;

onMounted(() => {
  loadDatabase();
});
</script>
<template>
  <div class="app-container">
    <Tabs :items="tabs" />
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  padding: 10px;
}
</style>
