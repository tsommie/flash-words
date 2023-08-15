<script setup>
import { computed } from "vue";
import verbs from "../data/verbs.js";

const verbsCount = computed(() => {
  return verbs.length;
});
</script>

<template>
  <div class="nav-scroller bg-body shadow-sm">
    <div class="container">
      <nav class="nav" aria-label="Secondary navigation">
<!--        <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        <a class="nav-link" href="#">
          Friends
          <span class="badge text-bg-light rounded-pill align-text-bottom">27</span>
        </a>-->
        <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
        <router-link class="nav-link" :to="{name: 'verbs'}">Verbs <span class="badge text-bg-light rounded-pill align-text-bottom" v-text="verbsCount"></span></router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>

</style>