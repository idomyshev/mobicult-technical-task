<script setup lang="ts">
import { useStickersStore } from "~/stores/stickersStore";
import { storeToRefs } from "pinia";

const stickerStore = useStickersStore();
const { isDataLoading } = storeToRefs(stickerStore);
</script>

<template>
  <Teleport to="body">
    <div class="basic-loader" v-if="isDataLoading">
      <img
        src="@/images/loader.svg"
        alt="loader"
        style="width: 150px; height: 150px"
      />
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@use "@/scss/z-indexes";

.basic-loader {
  z-index: z-indexes.$basic-loader;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
