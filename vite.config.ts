import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
// const path = require('path');

// @ts-ignore
import path from 'path';

const r = (p: string) => path.resolve(__dirname, p);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			'@src': r('.src/'),
			'@components': r('./src/lib/components/'),
			'@data': r('./src/lib/data/'),
			'@functions': r('./src/lib/functions/'),
		},
	},
});
