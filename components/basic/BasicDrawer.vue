<script setup lang="ts">
import BasicButton from "~/components/basic/BasicButton.vue";
import { lang } from "~/lang";

const visible = ref<boolean>(false);

const emit = defineEmits(["click:cancel", "click:action"]);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  actionButtonLabel: {
    type: String,
    required: true,
  },
  actionDisabled: {
    type: Boolean,
  },
});

const handleClickCancel = () => {
  emit("click:cancel");
};

const handleClickAction = () => {
  if (props.actionDisabled) {
    return;
  }

  emit("click:action");
};

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
    <div v-show="visible" class="basic-drawer">
      <Transition name="basic-drawer">
        <div v-if="visible" class="basic-drawer__inner">
          <div class="basic-drawer__title">{{ title }}</div>
          <div class="basic-drawer__body">
            <slot />
          </div>
          <div class="basic-drawer__buttons">
            <BasicButton :label="lang.cancel" @click="handleClickCancel" />
            <BasicButton
              :label="actionButtonLabel"
              :disabled="actionDisabled"
              primary
              @click="handleClickAction"
            />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
@use "@/scss/colors";
@use "@/scss/z-indexes";
@import "@/scss/typography";

.basic-drawer {
  z-index: z-indexes.$basic-drawer-z-index;
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  width: 100vw;
  height: 100vh;
  background-color: colors.$basic-drawer-overlay-background;

  &__inner {
    justify-self: end;
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 30vw;
    height: 100vh;
    min-width: 300px;
    max-width: 500px;
    box-sizing: border-box;
    padding: 20px;
    gap: 20px;
    background: colors.$basic-drawer-background;
    border-left: 1px solid colors.$basic-drawer-border;
    box-shadow: -5px 0 10px colors.$basic-drawer-shadow;
  }

  &__title {
    @include titles-m;
  }

  &__body {
    overflow-y: auto;
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }
}

.basic-drawer-enter-active,
.basic-drawer-leave-active {
  transition: transform 0.2s ease;
}

.basic-drawer-enter-from {
  transform: translateX(100%);
}

.basic-drawer-enter-to {
  transform: translateX(0);
}

.basic-drawer-leave-from {
  transform: translateX(0);
}

.basic-drawer-leave-to {
  transform: translateX(100%);
}
</style>
