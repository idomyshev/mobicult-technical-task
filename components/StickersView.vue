<script setup lang="ts">
import { storeToRefs } from "pinia";
import BasicButton from "~/components/BasicButton.vue";
import Sticker from "~/components/Sticker.vue";
import AddIcon from "~/components/icons/AddIcon.vue";
import BasicDrawer from "~/components/BasicDrawer.vue";
import { lang } from "~/lang";

const stickerStore = useStickersStore();
const { stickers } = storeToRefs(stickerStore);

const stickerDrawerRef = ref<typeof BasicDrawer | undefined>();

defineProps({
  editMode: Boolean,
});

const handleClickCreate = () => {
  stickerDrawerRef.value?.open();
};
</script>

<template>
  <div class="stickers-view">
    <div v-if="editMode" class="actions-panel">
      <BasicButton :icon="AddIcon" @click="handleClickCreate" />
    </div>
    <div class="stickers-container">
      <Sticker
        v-for="(item, index) in stickers"
        :item="item"
        :edit-mode="editMode"
        :key="index"
      />
    </div>
  </div>
  <BasicDrawer ref="stickerDrawerRef" :title="lang.delete" />
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
</style>
