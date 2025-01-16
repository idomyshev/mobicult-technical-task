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
    <div class="actions-panel">
      <template v-if="editMode">
        <BasicButton :icon="AddIcon" @click="handleClickCreate" />
      </template>
    </div>
    <div v-if="stickers.length" class="stickers-container">
      <div class="stickers-container__inner">
        <Sticker
          v-for="item in stickers"
          :key="item.id"
          :item="item"
          :edit-mode="editMode"
          @click:delete="handleClickDelete"
          @click:edit="handleClickEdit"
        />
      </div>
    </div>
    <div v-else class="no-data">
      <div>
        {{
          editMode
            ? lang.thereIsNoStickersYetLetsAdd
            : lang.thereIsNoStickersYet
        }}
        <BasicButton
          v-if="editMode"
          width="30px"
          height="30px"
          :icon="AddIcon"
          @click="handleClickCreate"
        />
      </div>
    </div>
  </div>
  <StickerDrawer ref="stickerDrawerRef" />
</template>

<style scoped lang="scss">
.stickers-view {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
}

.stickers-container {
  overflow-y: auto;
  &__inner {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
  }
}

.no-data {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 1.125rem;
  div {
    display: grid;
    place-items: center;
    gap: 20px;
  }
}
</style>
