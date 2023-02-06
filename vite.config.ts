/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
  },
  test: {
    cache: {
      dir: '../node_modules/.vitest',
    },
    coverage: {
      exclude: ['.test', '**/tests', '*/styles'],
      reportsDirectory: '../coverage',
    },
    environment: 'jsdom',
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    globals: true,
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['../.test/setup.js'],
  },
})
