<script setup lang="ts">
import BasicDrawer from "~/components/basic/BasicDrawer.vue";
import type { ISticker, IStickerForm } from "~/types";
import { lang } from "~/lang";
import BasicTextArea from "~/components/basic/BasicTextArea.vue";
import { useStickersStore } from "~/stores/stickersStore";
import BasicModal from "~/components/basic/BasicModal.vue";

const stickersStore = useStickersStore();

const { addSticker, editSticker } = stickersStore;

const initialDrawerState = {
  text: "",
};

const currentDrawerState = reactive<IStickerForm>({
  ...initialDrawerState,
});

const savedDrawerState = reactive<IStickerForm>({
  ...initialDrawerState,
});

const basicDrawerRef = ref<typeof BasicDrawer | undefined>();
const confirmDiscardModalRef = ref<typeof BasicModal | undefined>();
const instanceId = ref<string>();

const isValid = computed<boolean>(() => {
  return Object.values(currentDrawerState).every((value) => {
    return typeof value === "string" ? value.trim() : true;
  });
});

const isChanged = computed<boolean>(() => {
  return Object.entries(currentDrawerState).some(([key, value]) => {
    return typeof value === "string"
      ? value.trim() !== savedDrawerState[key as keyof IStickerForm]
      : true;
  });
});

const closeDrawer = () => {
  basicDrawerRef.value.close();
  reinitializeDrawerData();
};

const handleAction = () => {
  // Trim string values before save.
  Object.entries(currentDrawerState).forEach(([key, value]) => {
    if (typeof value === "string") {
      currentDrawerState[key as keyof IStickerForm] = value.trim();
    }
  });

  if (instanceId.value) {
    editSticker({ id: instanceId.value, ...currentDrawerState });
  } else {
    addSticker({ ...currentDrawerState });
  }

  closeDrawer();
};

const reinitializeDrawerData = () => {
  instanceId.value = undefined;
  Object.assign(currentDrawerState, { ...initialDrawerState });
  Object.assign(savedDrawerState, { ...initialDrawerState });
};

const handleClickCancel = () => {
  if (isChanged.value) {
    confirmDiscardModalRef.value?.open();
  } else {
    closeDrawer();
  }
};

const handleCancelDiscard = () => {
  confirmDiscardModalRef.value?.close();
};

const handleConfirmDiscard = () => {
  confirmDiscardModalRef.value?.close();
  closeDrawer();
};

defineExpose({
  open(item?: ISticker) {
    if (item) {
      const { id, ...form } = item;
      instanceId.value = id;
      Object.assign(currentDrawerState, form);
      Object.assign(savedDrawerState, form);
    }

    basicDrawerRef.value.open();
  },
});
</script>

<template>
  <BasicDrawer
    ref="basicDrawerRef"
    :title="instanceId ? lang.editSticker : lang.createSticker"
    :action-button-label="instanceId ? lang.update : lang.create"
    :action-disabled="!isValid"
    @click:cancel="handleClickCancel"
    @click:action="handleAction"
  >
    <BasicTextArea
      v-model="currentDrawerState.text"
      :placeholder="lang.enterTextForSticker"
    />
  </BasicDrawer>
  <BasicModal
    ref="confirmDiscardModalRef"
    :title="lang.doYouConfirmDiscardChanges"
    :text="lang.thisActionCannotBeUndone"
    @click:confirm="handleConfirmDiscard"
    @click:cancel="handleCancelDiscard"
  />
</template>
