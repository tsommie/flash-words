<script setup>
import MainNavigation from './components/MainNavigation.vue'
import SecondaryNavigation from './components/SecondaryNavigation.vue'
import Footer from "./components/Footer.vue";
import Home from "./pages/Home.vue";
</script>

<template>
  <MainNavigation />
  <SecondaryNavigation />

  <main class="container my-4">
    <router-view />
  </main>

<!--  <Footer />-->
</template>

<style scoped>
</style>
