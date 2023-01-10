import copy from 'rollup-plugin-copy'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    plugins: [
      copy({
        targets: [
          {
            src: 'node_modules/@emdgroup-liquid/liquid/dist/liquid/assets/*',
            dest: 'public/assets',
          },
        ],
        hook: 'buildStart',
      }),
    ],
  },
  build: {
    transpile: ['@emdgroup-liquid/liquid/dist/vue'],
  },
})
