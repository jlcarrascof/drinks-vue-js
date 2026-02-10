import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIAStore = defineStore('ia', () => {
  const prompt = ref('')
  const respuesta = ref('')

  async function generarReceta() {
    console.log('Desde generarReceta()')
  }

  return {
    prompt,
    respuesta,
    generarReceta,
  }
})
