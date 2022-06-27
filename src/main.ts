import './app.css';
import App from '@components/App.svelte';
import '@data/data';

const app = new App({
	target: document.getElementById('app'),
});

export default app;
