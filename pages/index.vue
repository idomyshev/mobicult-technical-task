<script setup lang="ts">
import {storeToRefs} from "pinia";

const stickerStore = useStickersStore();
const { stickers } = storeToRefs(stickerStore)
</script>
<template>
  <div class="dashboard-page">
    <Sticker v-for="item in stickers" :item="item" />
  </div>
</template>

<style lang="scss" scoped>
.dashboard-page {
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
