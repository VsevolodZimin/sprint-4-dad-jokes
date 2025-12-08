import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
    build: {
    assetsInlineLimit: 5400, // anything below 5400 byte is inlined
  }
})