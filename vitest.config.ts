import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      provider: 'istanbul', // или 'v8'
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      all: true,
    },
  },
});
