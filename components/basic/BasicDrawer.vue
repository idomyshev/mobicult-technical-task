<script setup lang="ts">
import BasicButton from "~/components/basic/BasicButton.vue";
import { lang } from "~/lang";

const visible = ref<boolean>(false);

const emit = defineEmits(["click:cancel", "click:action"]);

defineProps({
  title: {
    type: String,
    required: true,
  },
  actionButtonLabel: {
    type: String,
    required: true,
  },
});

const handleClickCancel = () => {
  emit("click:cancel");
};

const handleClickAction = () => {
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
  <Transition name="basic-drawer">
    <Teleport to="body">
      <div v-if="visible" class="basic-drawer">
        <div class="basic-drawer__title">{{ title }}</div>
        <div class="basic-drawer__body">
          <slot />
        </div>
        <div class="basic-drawer__buttons">
          <BasicButton :label="lang.cancel" @click="handleClickCancel" />
          <BasicButton
            :label="actionButtonLabel"
            :color="'indianred'"
            @click="handleClickAction"
          />
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style lang="scss" scoped>
.basic-drawer {
  position: absolute;
  top: 0;
  right: 0;
  gap: 20px;
  width: 30vw;
  min-width: 300px;
  max-width: 500px;
  height: 100vh;
  background: #fff;
  border-left: 1px solid #eee;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 1.5rem;
  }

  &__body {
    flex-grow: 1;
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

//.basic-drawer-enter-from,
//.basic-drawer-leave-to {
//  opacity: 0;
//}
</style>
