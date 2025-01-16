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
  position: relative;
  padding: 20px 20px 35px 20px;
  box-sizing: border-box;
  border: 1px solid indianred;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    overflow: hidden;
    width: 150px;
    height: 135px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.actions-buttons {
  width: 190px;
  position: absolute;
  bottom: 0;
  right: 2px;
  padding: 2px;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
}
</style>
