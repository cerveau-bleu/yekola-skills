import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/yekola-skills/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});