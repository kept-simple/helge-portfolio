import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from https://kept-simple.github.io/helge-portfolio/, so every asset
  // and route needs the repo name prefix. Set to '/' if a custom domain is added.
  base: '/helge-portfolio/',
  plugins: [react()],
})
