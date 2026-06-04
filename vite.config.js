// vite.config.js
// Vite dev server configuration
// The proxy forwards /api/* requests to our Express backend
// so the frontend and backend can run on different ports without CORS issues during dev

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // All requests starting with /api are forwarded to the Express server
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        // You can add rewrite rules here if your API path differs
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
})
