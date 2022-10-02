import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    base: '/orchisoftair-website',
    css: { modules: { localsConvention: 'camelCase' } },
    plugins: [reactRefresh()],
});
