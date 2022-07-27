import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
  NaiveUiResolver,
} from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
// import presetIcons from '@unocss/preset-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    Components({
      resolvers: [
        NaiveUiResolver(),
      ],
    }),

    Unocss(),
  ],
})
