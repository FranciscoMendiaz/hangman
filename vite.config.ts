import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      exclude: [
        'src/main.tsx',
        'test',
        'eslint.config.js',
        'vite.config.ts',
        'src/vite-env.d.ts',
        '/coverage',
        './cypress',
        './dist',
        './cypress.config.js',
      ],
    },
  },
});
