<script setup lang="ts">
import {storeToRefs} from "pinia";

const stickerStore = useStickersStore();
const { stickers } = storeToRefs(stickerStore)

defineProps({
  editMode: Boolean
})
</script>

<template>
  <div class="stickers-view">
    <Sticker v-for="item in stickers" :item="item" />
  </div>
</template>

<style scoped lang="scss">
.stickers-view {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>