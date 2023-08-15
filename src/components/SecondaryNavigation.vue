<script setup>

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
        <router-link class="nav-link" :to="{name: 'verbs'}">Verbs</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>

</style>