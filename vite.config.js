import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    // SEO optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion', 'gsap'],
        }
      }
    },
    // Generate source maps for better debugging
    sourcemap: false,
    // Optimize bundle size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize for better SEO and performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  },
  // Development server configuration
  server: {
    port: 3000,
    open: true
  },
  // Define environment variables
  define: {
    __SITE_URL__: JSON.stringify('https://vyomdubey.com/'),
    __AUTHOR_NAME__: JSON.stringify('Vyom Dubey')
  }
});
