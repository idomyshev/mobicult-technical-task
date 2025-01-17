<script setup lang="ts">
import { lang } from "~/lang";
import BasicButton from "~/components/basic/BasicButton.vue";

const emit = defineEmits(["click:cancel", "click:confirm"]);

defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const visible = ref<boolean>(false);

defineExpose({
  open() {
    visible.value = true;
  },
  close() {
    visible.value = false;
  },
});
</script>

<template>
  <Teleport to="body">
    <div class="basic-modal" v-if="visible">
      <div class="basic-modal__inner">
        <div class="title">
          {{ title }}
        </div>
        <div class="body">
          {{ text }}
        </div>
        <div class="actions">
          <BasicButton :label="lang.cancel" @click="emit('click:cancel')" />
          <BasicButton
            :label="lang.confirm"
            primary
            @click="emit('click:confirm')"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@use "@/scss/z-indexes";
@use "@/scss/colors";
@import "@/scss/typography";

.basic-modal {
  z-index: z-indexes.$basic-modal;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: colors.$basic-modal-overlay-background;

  &__inner {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 20px;
    width: 250px;
    min-height: 150px;
    border-radius: 5px;
    padding: 20px;
    background-color: colors.$basic-modal-background;
  }
}

.title {
  @include title-m;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
</style>
