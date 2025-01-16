<script setup lang="ts">
import { storeToRefs } from "pinia";
import BasicButton from "~/components/basic/BasicButton.vue";
import Sticker from "~/components/Sticker.vue";
import AddIcon from "~/components/icons/AddIcon.vue";
import StickerDrawer from "~/components/drawers/StickerDrawer.vue";
import { useStickersStore } from "~/stores/stickersStore";
import { lang } from "../lang";
import type { ISticker } from "~/types";

const stickerStore = useStickersStore();
const { stickers } = storeToRefs(stickerStore);
const { deleteSticker } = stickerStore;

const stickerDrawerRef = ref<typeof StickerDrawer | undefined>();

defineProps({
  editMode: Boolean,
});

const handleClickCreate = () => {
  stickerDrawerRef.value?.open();
};

const handleClickEdit = (item: ISticker) => {
  stickerDrawerRef.value?.open(item);
};

const handleClickDelete = (item: ISticker) => {
  deleteSticker(item);
};
</script>

<template>
  <div class="stickers-view">
    <div v-if="editMode" class="actions-panel">
      <BasicButton :icon="AddIcon" @click="handleClickCreate" />
    </div>
    <div v-if="stickers.length" class="stickers-container">
      <Sticker
        v-for="(item, index) in stickers"
        :item="item"
        :edit-mode="editMode"
        :key="index"
        @click:delete="handleClickDelete"
        @click:edit="handleClickEdit"
      />
    </div>
    <div v-else class="no-items">
      {{ lang.thereIsNoStickersYet }}
      <BasicButton
        width="30px"
        height="30px"
        :icon="AddIcon"
        @click="handleClickCreate"
      />
    </div>
  </div>
  <StickerDrawer ref="stickerDrawerRef" />
</template>

<style scoped lang="scss">
.stickers-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stickers-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.no-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.125rem;
  width: 100%;
  text-align: center;
}
</style>
