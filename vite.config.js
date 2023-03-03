import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  plugins: [
    // …
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
  ],
//   resolve: {
//     alias: {
//       src: path.resolve(__dirname, 'src'),
//     }
//   },
  server: {
    port: 3000
  }
});