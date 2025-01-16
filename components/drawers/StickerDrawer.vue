<script setup lang="ts">
import type { PropType } from "vue";
import BasicDrawer from "~/components/basic/BasicDrawer.vue";
import type { ISticker } from "~/types";
import { lang } from "~/lang";
import BasicTextArea from "~/components/basic/BasicTextArea.vue";

defineProps({
  item: {
    type: Object as PropType<ISticker>,
  },
});

const currentDrawerState = reactive<ISticker>({
  text: "",
});

const basicDrawerRef = ref<typeof BasicDrawer | undefined>();

const handleCancel = () => {
  basicDrawerRef.value.close();
};

const handleAction = () => {
  // TODO
  basicDrawerRef.value.close();
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
    @click:cancel="handleCancel"
    @click:action="handleAction"
  >
    <BasicTextArea v-model="currentDrawerState.text" />
  </BasicDrawer>
</template>

<style scoped lang="scss"></style>
