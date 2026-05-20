import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/AS_Personal_Trainer.io/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
