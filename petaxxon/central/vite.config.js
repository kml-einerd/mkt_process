import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' → o build estático abre por file:// ou de qualquer subpasta.
export default defineConfig({
  plugins: [react()],
  base: './',
})
