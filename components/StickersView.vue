<script setup lang="ts">
import { storeToRefs } from "pinia";
import BasicButton from "~/components/basic/BasicButton.vue";
import Sticker from "~/components/Sticker.vue";
import AddIcon from "~/components/icons/AddIcon.vue";
import StickerDrawer from "~/components/drawers/StickerDrawer.vue";
import { useStickersStore } from "~/stores/stickersStore";
import { lang } from "../lang";
import type { ISticker } from "~/types";
import BasicModal from "~/components/basic/BasicModal.vue";

const stickerStore = useStickersStore();
const { stickers, isDataLoading } = storeToRefs(stickerStore);
const { deleteSticker } = stickerStore;

const stickerDrawerRef = ref<typeof StickerDrawer | undefined>();
const confirmDeleteModalRef = ref<typeof BasicModal | undefined>();
const selectedInstance = ref<ISticker | null>(null);

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
  selectedInstance.value = item;
  confirmDeleteModalRef.value?.open();
};

const handleCancelDelete = () => {
  selectedInstance.value = null;
  confirmDeleteModalRef.value?.close();
};

const handleConfirmDelete = () => {
  if (!selectedInstance.value) {
    throw new Error("handleConfirmDelete: selectedInstance is not defined");
  }

  deleteSticker(selectedInstance.value);
  selectedInstance.value = null;
  confirmDeleteModalRef.value?.close();
};
</script>

<template>
  <div class="stickers-view">
    <div class="actions-panel">
      <template v-if="editMode">
        <BasicButton
          v-if="stickers.length"
          width="30px"
          height="30px"
          :icon="AddIcon"
          @click="handleClickCreate"
        />
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
    <div v-else-if="!isDataLoading" class="no-data">
      <div>
        <template v-if="editMode">
          {{ lang.thereIsNoStickersYetLetsAdd[0] }}<br />
          {{ lang.thereIsNoStickersYetLetsAdd[1] }}
        </template>
        <template v-else> {{ lang.thereIsNoStickersYet }}</template>
        <BasicButton
          v-if="editMode"
          width="50px"
          height="50px"
          :icon="AddIcon"
          @click="handleClickCreate"
        />
      </div>
    </div>
  </div>
  <StickerDrawer ref="stickerDrawerRef" />
  <BasicModal
    ref="confirmDeleteModalRef"
    :title="lang.doYouConfirmDeleteSticker"
    :text="lang.thisActionCannotBeUndone"
    @click:confirm="handleConfirmDelete"
    @click:cancel="handleCancelDelete"
  />
</template>

<style scoped lang="scss">
@import "@/scss/typography";

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
  div {
    @include title-l;
    line-height: 150%;
    display: grid;
    place-items: center;
    gap: 20px;
    text-align: center;
  }
}
</style>
