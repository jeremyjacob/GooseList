<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	import { groceries, toggleGrocery } from '@data/data';
	import { slideOut } from '@functions/animations';
	import Quantity from './Quantity.svelte';
	import { isSafariIOS } from '@data/device';

	export let grocery: Grocery;

	// const SLIDE_MIN = 10;
	// const SLIDE_AMOUNT = 500;
	let disableTransform = false;

	const slide = tweened(0, {
		duration: 200,
		easing: cubicOut,
	});

	// function slideOut() {
	// 	slide.set(SLIDE_AMOUNT * (Math.abs($slide) / $slide));
	// }

	// let initalX = 0;
	// function touchStart(event: TouchEvent) {
	// 	if (!$canSwipeCard) return;
	// 	canScrollPage.set(true);
	// 	initalX = event.changedTouches[0].clientX;
	// 	document.addEventListener('touchend', touchEnd);
	// 	document.addEventListener('touchmove', touchMove);
	// }

	// function touchEnd() {
	// 	document.removeEventListener('touchend', touchEnd);
	// 	document.removeEventListener('touchmove', touchMove);
	// 	canScrollPage.set(false);

	// 	if (Math.abs($slide) > SLIDE_MIN) {
	// 		slideOut();
	// 	} else {
	// 		slide.set(0);
	// 	}
	// }

	// function touchMove(event: TouchEvent) {
	// 	slide.set(event.changedTouches[0].clientX - initalX);
	// 	if (!$canSwipeCard && Math.abs($slide) < SLIDE_MIN) touchEnd();
	// }
</script>

<label
	class="text-xl py-2 pr-3 pl-[4px] flex items-center text-groose-black bg-white"
	style:transform="translateX({disableTransform ? 0 : $slide}px)"
	style:height="{60 * (Math.abs($slide) / -1000 + 1)}px"
	for="#{grocery.id}"
	transition:slideOut
>
	<input
		type="radio"
		class="mr-4 ml-[0.75rem] bg-blue-900"
		id="#{grocery.id}"
		checked={grocery.checked}
		on:click={() => setTimeout(() => toggleGrocery(grocery), 10)}
	/>
	<div class="w-full flex items-center pb-2 border-b border-b-zinc-200">
		<span
			><img
				src={grocery.image}
				alt=""
				class="h-9 d-lg mr-2.5 aspect-square"
				class:grayscale={grocery.checked}
			/></span
		>
		<input
			class="text-groose-600 text-lg outline-none opacity-100 grow"
			class:text-zinc-400={grocery.checked}
			class:text-zinc-500={grocery.checked && isSafariIOS}
			class:line-through={grocery.checked}
			disabled={grocery.checked}
			value={grocery.name}
		/>
		<flex-spacer class="w-10" />
		<span class=""
			><Quantity
				quantity={grocery.quantity}
				unit={grocery.unit}
				checked={grocery.checked}
			/></span
		>
	</div>
</label>

<style>
	input[type='radio'],
	input[type='checkbox'] {
		width: 1.5em;
		height: 1.5rem;
		@apply accent-groose-medium;
	}
</style>
