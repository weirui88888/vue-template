import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

console.log('main.ts...', 'register store')

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
  store.use(piniaPersist)
}

export default store
