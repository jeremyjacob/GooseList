<script lang="ts">
	export let quantity: number;
	export let unit = '';
	export let checked = false;
</script>

<div class="text-center w-11" class:text-zinc-400={checked}>
	<!-- {#if quantity > 1} -->
	<input
		class="text-2xl w-11"
		style="text-align: center;"
		disabled={checked}
		class:text-zinc-300={quantity <= 1 && !unit}
		value={quantity}
	/>
	{#if unit}
		<p class="text-xs -mt-2">{unit}</p>
	{/if}
	<!-- {/if} -->
</div>
