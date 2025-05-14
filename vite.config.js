import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  base: '/system/octo/esquelas/app/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        vista: resolve(__dirname, "public/vista.html"), // 👈 nueva entrada
      },
    },
  },
})
