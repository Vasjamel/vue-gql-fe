<script setup>
import { RouterView } from 'vue-router'
import { useRouteWatcher } from './composables/useRouteWatcher'

useRouteWatcher()
</script>

<template>
  <section class="app-container">
    <header>
      <h2>some interesting app -- header</h2>
    </header>
    <hr />
    <main class="main">
      <RouterView />
    </main>
    <hr />
    <footer>footer</footer>
  </section>
</template>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  header,
  footer {
    flex-shrink: 0;
  }

  .main {
    flex-grow: 1;
  }
}
</style>
