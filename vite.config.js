import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Clean URLs (BrowserRouter) + prerendered nested pages (e.g.
// /products/boutique-ai) require an ABSOLUTE base so asset paths always
// resolve from the site root, not relative to the page's folder.
export default defineConfig({
  plugins: [react()],
  base: '/aasaitech-webv1/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1200,
  },
})