import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/aasaitech-webv1/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1200,
  },
})
