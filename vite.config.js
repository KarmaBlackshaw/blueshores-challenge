import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

const config = defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
  },

  build: {
    minify: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/css/colors.scss";
          @import "@/assets/css/media-queries.scss";
        `,
      },
    },
  },

  plugins: [
    vue(),
    Components({
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
    }),
  ],

  server: {
    port: 3333,
  },
})

export default config
