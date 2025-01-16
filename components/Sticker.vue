<script setup lang="ts">
import type { PropType } from "vue";
import type { Sticker } from "~/types";
import BasicButton from "~/components/BasicButton.vue";
import EditIcon from "~/components/icons/EditIcon.vue";
import DeleteIcon from "~/components/icons/DeleteIcon.vue";

defineProps({
  item: {
    type: Object as PropType<Sticker>,
    required: true,
  },
  editMode: {
    type: Boolean,
  },
});

const handleClickDelete = () => {
  console.log("handleClickDelete");
};

const handleClickEdit = () => {
  console.log("handleClickEdit");
};
</script>

<template>
  <div class="sticker">
    <div v-if="editMode" class="actions-buttons">
      <BasicButton :icon="DeleteIcon" @click="handleClickDelete" />
      <BasicButton :icon="EditIcon" @click="handleClickEdit" />
    </div>
    <div class="sticker__inner">
      {{ item.text }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.sticker {
  position: relative;
  padding: 20px;
  border: 1px solid indianred;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    overflow: hidden;
    width: 150px;
    height: 150px;
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
