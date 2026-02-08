import { createOpenRouter } from '@openrouter/ai-sdk-provider'

export const openrouter = createOpenRouter({
  apiKey: import.meta.VITE_OPENROUTER_KEY,
})
