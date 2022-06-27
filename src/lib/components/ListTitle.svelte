<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const progress = tweened(1, {
		duration: 100,
		easing: cubicOut,
	});

	export let showNav = false;
	let title: HTMLDivElement;

	let size = 1;
	// $: window.size = size;

	function scroll() {
		// const value = (100 - window.scrollY) / 100;
		// const min = 0.5;
		// const clamped = Math.min(Math.max(value, min), 1);
		// showNav = clamped < min + 0.2;
		// progress.set(clamped);
		// size = clamped;
		// showNav = window.scrollY > title.offsetTop + title.offsetHeight - 10;
	}

	onMount(() => {
		window.addEventListener('scroll', scroll);
	});

	onDestroy(() => {
		window.removeEventListener('scroll', scroll);
	});
</script>

<div bind:this={title} class="text-4xl font-medium font-serif mx-[1.125rem]">
	<h1
		class="text-groose-medium font-serif z-20 transform-gpu"
		style:transform="scale({$progress})"
	>
		Goose List
	</h1>
</div>
