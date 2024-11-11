<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header> -->

  <section class="main flex content-center items-center">
    <RouterView />
  </section>
</template>

<style scoped>
.main {
  height: 100vh;
}
</style>
