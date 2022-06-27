<script lang="ts">
	import Toasts from './Toasts.svelte';
	import Navbar from './Navbar.svelte';
	import GroceryList from './GroceryList.svelte';
	import Goose from './Goose.svelte';
	import SubtitleModified from './SubtitleModified.svelte';
	import ListTitle from './ListTitle.svelte';
	import { canSwipeCard } from '@data/ui';
	import '@functions/wakelock';
	import SignIn from './SignIn.svelte';
	import { user } from '@data/data';

	export const _ = null;
	let showNav: boolean;
	let overlay = false;

	let x = 0;
	let y = 0;
	document.addEventListener('touchstart', (event: TouchEvent) => {
		x = event.touches[0].clientX;
		y = event.touches[0].clientY;
	});

	window.addEventListener('touchmove', (event: TouchEvent) => {
		let diffX = Math.abs(x - event.touches[0].clientX);
		let diffY = Math.abs(y - event.touches[0].clientY);
		canSwipeCard.set(diffX > diffY);
		// if (event.movementY > 2) canSwipeCard.set(false);
	});

	document.addEventListener('touchend', () => {
		canSwipeCard.set(true);
	});
</script>

<Toasts />
{#if !$user}
	<SignIn />
{:else}
	<main class="pt-6">
		<Goose />
		{#if showNav}
			<Navbar />
		{/if}
		<ListTitle bind:showNav />
		<SubtitleModified />
		<GroceryList />
	</main>
{/if}
