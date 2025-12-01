import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // 👇 IMPORTANTE: La base debe apuntar al nombre del repositorio EXACTO
  base: "/Pokedex/",

  plugins: [
    tailwindcss(),
    react()
  ],

  // 👇 Opcional pero recomendado para GitHub Pages
  build: {
    outDir: "dist",
    emptyOutDir: true,
  }
})
