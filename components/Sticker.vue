<script setup lang="ts">
import type {PropType} from "vue";
import type {Sticker} from "~/types";

defineProps({
  item: {
    type: Object as PropType<Sticker>,
    required: true
  }
})
</script>

<template>
  <div class="sticker">
    <div class="sticker__inner">
      {{ item.text }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.sticker {
  padding: 20px;
  border: 1px solid indianred;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    overflow: hidden;
    width: 200px;
    height: 94px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>