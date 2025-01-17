<script setup lang="ts">
import { lang } from "./lang";
import BasicButton from "~/components/basic/BasicButton.vue";
import HomeIcon from "~/components/icons/HomeIcon.vue";

const props = defineProps(["error"]);
</script>

<template>
  <div class="error-page">
    <div class="error-page__container">
      {{
        props.error.statusCode === 404 ? lang.error404 : lang.somethingWentWrong
      }}
      <RouterLink :to="{ name: 'index' }">
        <BasicButton :icon="HomeIcon" width="50px" height="50px" />
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/typography";
@import "@/scss/typography";
.error-page {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    @include title-l;
    text-align: center;
  }
}
</style>
