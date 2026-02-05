import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([])

  return {
    categorias,
  }
})
