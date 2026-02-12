import { openrouter } from '../lib/ia'
import { streamText } from 'ai'

export default {
  async generarReceta(prompt) {
    const resultado = streamText({
      // Cambia el ID específico por el router automático
      model: openrouter('openrouter/free'),
      prompt,
    })

    console.log(resultado.textStream)
  },
}
