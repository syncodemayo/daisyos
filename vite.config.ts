import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/mcp-proxy': {
        target: 'https://www.elizacloud.ai',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mcp-proxy/, '')
      }
    }
  }
})
