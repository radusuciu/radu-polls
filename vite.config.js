import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path');

export default defineConfig({
    build: {
        manifest: true,
        rollupOptions: {
            input: [
                resolve(__dirname, './polls/static/src/main.js'),
            ]
        },
        outDir: 'static',
        assetsDir: 'assets',
    },
    // base: '/static/',
    plugins: [vue()],
    server: {
        port: 3001,
        open: false,
    }
});
