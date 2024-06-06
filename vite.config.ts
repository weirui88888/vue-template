import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  const BASE_URL = env.VITE_BASE_URL
  return defineConfig({
    base: BASE_URL,
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false // css in js
          })
        ]
      }),
      AutoImport({
        imports: ['vue'],
        dts: 'src/auto-import.d.ts'
      })
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
