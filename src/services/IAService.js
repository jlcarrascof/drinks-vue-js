import { openrouter } from '../lib/ia'
import { streamText } from 'ai'

export default {
  async generarReceta(prompt) {
    const resultado = streamText({
      // Cambia el ID específico por el router automático
      model: openrouter('openrouter/free'),
      prompt,
      system: 'Da las respuestas siempre en Inglés',
      temperature: 0.3,
    })

    return resultado.textStream
  },
}
