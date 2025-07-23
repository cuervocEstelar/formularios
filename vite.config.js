import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Usar rutas relativas para el build
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de red
    port: 5173, // Puerto por defecto de Vite
  },
})
