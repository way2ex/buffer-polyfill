import { defineConfig } from 'vite';
export default defineConfig({
  // mode: 'production',
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Buffer',
      fileName: 'buffer',
      formats: ['es', 'umd', 'cjs']
    }
  }
});
