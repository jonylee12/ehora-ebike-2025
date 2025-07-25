import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ehora-ebike-2025/', // ← numele exact al repository-ului tău
  plugins: [react()],
})
