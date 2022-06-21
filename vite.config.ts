import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: { //esconde por mientras el warning del "this" ese. que no acepta afc
    define: {
      this: 'window'
    }
  }
})
