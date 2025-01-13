import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import graphql from '@rollup/plugin-graphql'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), vueDevTools(), graphql()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    base: mode === 'production' ? '/flashcard-app-front/' : '',
    server: {
      proxy: {
        '/graphql': {
          target: 'http://localhost:3000', // URL do servidor GraphQL
          changeOrigin: true, // Modifica o cabeçalho Host para coincidir com o target
          rewrite: (path) => path.replace(/^\/graphql/, '/graphql'), // Mantém o endpoint '/graphql'
        },
      },
    },
  }
})
