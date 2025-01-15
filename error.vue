<script setup lang="ts">
import { lang } from "./lang";

const props = defineProps(['error'])
</script>

<template>
    <ErrorPage>
      {{ props.error.statusCode === 404 ? lang.error404 : lang.somethingWentWrong }}
    </ErrorPage>
</template>