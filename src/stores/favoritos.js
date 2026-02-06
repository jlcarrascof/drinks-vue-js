import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore('favoritos', () => {
  const handleClickFavorito = () => {
    console.log('Adding ....')
  }

  return {
    handleClickFavorito,
  }
})
