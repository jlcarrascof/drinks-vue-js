import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'

export const useFavoritosStore = defineStore('favoritos', () => {
  const bebidas = useBebidasStore()

  const handleClickFavorito = () => {
    console.log(bebidas.receta)
  }

  return {
    handleClickFavorito,
  }
})
