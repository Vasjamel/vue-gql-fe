<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TeacherLessons from './components/lessons/TeacherLessons.vue'
</script>

<template>
  <section class="app-container">
    <header>
      <h2>some interesting app</h2>
    </header>
    <hr />
    <main class="main">
      <TeacherLessons />
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
