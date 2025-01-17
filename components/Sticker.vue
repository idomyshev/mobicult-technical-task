<script setup lang="ts">
import type { PropType } from "vue";
import type { ISticker } from "~/types";
import BasicButton from "~/components/basic/BasicButton.vue";
import EditIcon from "~/components/icons/EditIcon.vue";
import DeleteIcon from "~/components/icons/DeleteIcon.vue";

const emit = defineEmits(["click:delete", "click:edit"]);

defineProps({
  item: {
    type: Object as PropType<ISticker>,
    required: true,
  },
  editMode: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="sticker">
    <div v-if="editMode" class="actions-buttons">
      <BasicButton
        :icon="DeleteIcon"
        @click="emit('click:delete', { ...item })"
      />
      <BasicButton :icon="EditIcon" @click="emit('click:edit', { ...item })" />
    </div>
    <div class="sticker__inner">
      {{ item.text }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.sticker {
  width: 200px;
  height: 200px;
  position: relative;
  padding: 20px 20px 35px 20px;
  box-sizing: border-box;
  border: 1px solid indianred;
  border-radius: 10px;
  display: grid;
  place-items: center;
  justify-content: center;
  align-items: center;

  &__inner {
    max-width: 100%;
    max-height: 100%;
    overflow-y: hidden;
    text-align: center;
  }
}

.actions-buttons {
  position: absolute;
  bottom: 0;
  right: 2px;
  padding: 2px;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
}
</style>
