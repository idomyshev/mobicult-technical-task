<script setup lang="ts">
import BasicDrawer from "~/components/basic/BasicDrawer.vue";
import type { ISticker, IStickerForm } from "~/types";
import { lang } from "~/lang";
import BasicTextArea from "~/components/basic/BasicTextArea.vue";
import { useStickersStore } from "~/stores/stickersStore";

const stickersStore = useStickersStore();

const { addSticker } = stickersStore;

const initialDrawerState = {
  text: "",
};

const currentDrawerState = reactive<IStickerForm>({
  ...initialDrawerState,
});

const basicDrawerRef = ref<typeof BasicDrawer | undefined>();
const instanceId = ref<string>();

const isValid = computed<boolean>(() => {
  return Object.values(currentDrawerState).every((value) => {
    return typeof value === "string" ? value.trim() : true;
  });
});

const handleCancel = () => {
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
  addSticker({ ...currentDrawerState });
  handleCancel();
};

const reinitializeDrawerData = () => {
  instanceId.value = undefined;
  Object.assign(currentDrawerState, { ...initialDrawerState });
};

defineExpose({
  open(item?: ISticker) {
    if (item) {
      const { id, ...form } = item;
      instanceId.value = id;
      Object.assign(currentDrawerState, form);
    }

    basicDrawerRef.value.open();
  },
});
</script>

<template>
  <BasicDrawer
    ref="basicDrawerRef"
    :title="instanceId ? lang.editSticker : lang.createSticker"
    :action-button-label="instanceId ? lang.save : lang.create"
    :action-disabled="!isValid"
    @click:cancel="handleCancel"
    @click:action="handleAction"
  >
    <BasicTextArea
      v-model="currentDrawerState.text"
      :placeholder="lang.enterTextForSticker"
    />
  </BasicDrawer>
</template>

<style scoped lang="scss"></style>
