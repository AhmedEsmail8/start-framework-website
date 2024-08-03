import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/start-framework-website/',
  server: {
    port: process.env.PORT as unknown as number,
  },
  plugins: [react()],
});