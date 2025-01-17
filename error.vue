<script setup lang="ts">
import { lang } from "./lang";
import ErrorPage from "~/components/ErrorPage.vue";

const props = defineProps(["error"]);
</script>

<template>
  <ErrorPage>
    <div class="error-container">
      {{
        props.error.statusCode === 404 ? lang.error404 : lang.somethingWentWrong
      }}
      <div class="go-to-home-page">
        <RouterLink :to="{ name: 'index' }"> Go to home page </RouterLink>
      </div>
    </div>
  </ErrorPage>
</template>

<style lang="scss" scoped>
@import "@/scss/typography";
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @include titles-l;
}
.go-to-home-page a {
  @include titles-m;
}
</style>
