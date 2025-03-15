import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
  },
  resolve: {
    alias: {
      'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom'),
    },
  },
});