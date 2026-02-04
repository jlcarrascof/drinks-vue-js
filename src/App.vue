<script setup>
import { RouterView } from 'vue-router'
import HeaderForm from './components/HeaderForm.vue'
</script>

<template>
  <HeaderForm />

  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
</template>
