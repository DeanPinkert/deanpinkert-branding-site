import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      ViteImageOptimizer({
          jpeg: {
              quality: 10,
          },
          jpg: {
              quality: 10,
          },
      })],
  base: '/deanpinkert-branding-site/'
})
