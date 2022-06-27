<script lang="ts">
	import GroceryItem from './GroceryItem.svelte';
	import AddGrocery from './AddGrocery.svelte';
	import { groceries } from '@data/data';
	import { flip } from 'svelte/animate';
	import { cubicOut } from 'svelte/easing';
	import Footer from './Footer.svelte';
</script>

<!-- <AddGrocery /> -->
<div
	class="w-full -mt-0.5 mx-1 overflow-hidden"
	style:height="{61 * $groceries.length + 12}px"
>
	{#each $groceries.filter((g) => !g.checked) as grocery, index (grocery.id)}
		<div animate:flip={{ duration: 300, easing: cubicOut }}>
			<GroceryItem {grocery} />
		</div>
	{/each}
	<!-- <hr /> -->
	{#if $groceries.filter((g) => g.checked).length}
		<span class="font-black text-sm ml-4 mt-3 text-groose-700">CHECKED</span
		>
	{/if}
	{#each $groceries.filter((g) => g.checked) as grocery, index (grocery.id)}
		<div animate:flip={{ duration: 300, easing: cubicOut }}>
			<GroceryItem {grocery} />
		</div>
	{/each}
</div>
<Footer />

<style>
	div {
		/* box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.03); */
		transition: height 0.3s cubic-bezier(0.33, 1, 0.68, 1);
	}
</style>
