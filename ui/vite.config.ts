import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base : '',
  server: {
    allowedHosts: ['442e-186-193-57-229.ngrok-free.app']
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'remove-dot-slash',
      transformIndexHtml(html) {
        return html
            .replace(/\.\/assets\//g, 'assets/')
            .replace(/\.\/(index\.(js|css))/g, '$1')
      }
    }
  ],
  build: {
    outDir: '../smartphone/ui',
    emptyOutDir: true,
  },
})
