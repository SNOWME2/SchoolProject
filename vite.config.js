import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        chunkSizeWarningLimit: 1000, // Increase limit as needed
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                return 'vendor'; // Creates a 'vendor' chunk for npm dependencies
              }
              // You can add further custom chunking logic here
            },
          },
        },
      },
});
