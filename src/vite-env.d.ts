import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/name/',  // Replace 'my-react-app' with your actual repository name
});
