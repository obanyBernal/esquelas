import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/', // ✅ base vacía para que funcione bien en Vercel
  plugins: [react()],
})