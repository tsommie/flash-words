<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <header class="pb-3 mb-4 border-bottom">
    <span class="d-flex align-items-center text-body-emphasis text-decoration-none">
      <span class="fs-4" v-text="title"></span>
    </span>
  </header>
</template>

<style scoped>

</style>