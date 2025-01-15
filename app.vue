<script lang="ts" setup>
import { tabs } from "~/settings/tabs";
import Tabs from "~/components/Tabs.vue";
</script>
<template>
  <div class="app-container">
    <Tabs :items="tabs" />
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  padding: 10px;
}
</style>
