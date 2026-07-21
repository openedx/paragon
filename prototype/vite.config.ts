/// <reference types="vitest/config" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// Library-mode build for the prototype. Emits ESM + type declarations and
// preserves tree-shaking via `sideEffects` in package.json. This is the
// modern replacement for the current Babel + tsc + Makefile pipeline.
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      // Do not bundle peer/runtime deps into the library output.
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-aria',
        'react-aria-components',
        'clsx',
      ],
    },
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
  },
});
