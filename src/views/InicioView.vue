<script setup>
import Receta from '../components/RecetasCard.vue'
import { useBebidasStore } from '../stores/bebidas'

const bebidas = useBebidasStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recipes</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <Receta />
  </div>
</template>
