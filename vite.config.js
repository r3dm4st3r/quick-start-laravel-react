import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        },
        viteReact()
    ],
    server: {
        open: true
    }
});
