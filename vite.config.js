import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  base: '/system/octo/esquelas/app/',
  plugins: [react()],
  build: {
    outDir: "dist/system/octo/esquelas/app",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        vista: "vista.html", 
      },
    },
  },
})
