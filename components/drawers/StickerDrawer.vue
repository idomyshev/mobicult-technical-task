<script setup lang="ts">
import type { PropType } from "vue";
import BasicDrawer from "~/components/basic/BasicDrawer.vue";
import type { ISticker } from "~/types";
import { lang } from "~/lang";
import BasicTextArea from "~/components/basic/BasicTextArea.vue";
import { useStickersStore } from "~/stores/stickersStore";

const stickersStore = useStickersStore();

const { addSticker } = stickersStore;

const initialDrawerState = {
  text: "",
};

defineProps({
  item: {
    type: Object as PropType<ISticker>,
  },
});

const currentDrawerState = reactive<ISticker>({ ...initialDrawerState });

const basicDrawerRef = ref<typeof BasicDrawer | undefined>();

const isValid = computed<boolean>(() => {
  return Object.values(currentDrawerState).every((value) => {
    return typeof value === "string" ? value.trim() : value;
  });
});

const handleCancel = () => {
  basicDrawerRef.value.close();
  Object.assign(currentDrawerState, { ...initialDrawerState });
};

const handleAction = () => {
  // Trim string values before save.
  Object.entries(currentDrawerState).forEach(([key, value]) => {
    if (typeof value === "string") {
      currentDrawerState[key as keyof ISticker] = value.trim();
    }
  });
  addSticker({ ...currentDrawerState });
  handleCancel();
};

defineExpose({
  open(item?: ISticker) {
    if (item) {
      Object.assign(currentDrawerState, item);
    }

    basicDrawerRef.value.open();
  },
});
</script>

<template>
  <BasicDrawer
    ref="basicDrawerRef"
    :title="item ? lang.editSticker : lang.createSticker"
    :action-button-label="item ? lang.save : lang.create"
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
