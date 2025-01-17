<template>
  <div class="error-page">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/typography";
.error-page {
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
}
</style>
