import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative paths work both locally and when hosted from a GitHub Pages repo path.
  base: './',
  plugins: [react()],
})
