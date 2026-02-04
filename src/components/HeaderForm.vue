<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-slate-800">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'inicio' }">
            <img class="w-32" src="/img/logo.svg" alt="logotipo" />
          </RouterLink>
        </div>
        <nav class="flex gap-4">
          <RouterLink
            :to="{ name: 'inicio' }"
            class="text-white uppercase font-bold"
            active-class="text-orange-500"
          >
            Home
          </RouterLink>
        </nav>
      </div>

      <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="ingrediente"
            >Name or Ingredient</label
          >
          <input
            id="ingrediente"
            type="text"
            class="p-3 w-full rounded-lg focus:outline-none bg-white"
            placeholder="Name or Ingredient: e.g. Vodka, Tequila, etc."
          />
        </div>
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="categoria"
            >Category</label
          >
          <select id="categoria" class="p-3 w-full rounded-lg focus:outline-none bg-white">
            <option value="">-- Select --</option>
          </select>
        </div>
        <input
          type="submit"
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
          value="Search Recipe"
        />
      </form>
    </div>
  </header>
</template>
