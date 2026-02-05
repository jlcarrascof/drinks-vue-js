<script setup>
defineProps({
  receta: {
    type: Object,
  },
})
</script>

<template>
  <div class="border shadow-lg">
    <div>
      <img :src="receta.strDrinkThumb" />
    </div>
    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">{{ receta.strDrink }}</h2>
    </div>
  </div>
</template>
