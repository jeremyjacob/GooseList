<script lang="ts" context="module">
	import { flip } from 'svelte/animate';
	import { writable } from 'svelte/store';
	import { fadeSlide, receive, send } from '@functions/animations';

	export enum Status {
		Info = 'zinc',
		Success = 'groose',
		Error = 'red',
		Warning = 'yellow',
	}
	type Toast = {
		text: string;
		status: Status;
		id?: number;
		close?: Function;
	};

	export const toasts = writable<Toast[]>([]);

	export function popToast(toast: Toast) {
		toast.id = Date.now();
		toasts.update((toasts) => [...toasts, toast]);
		toast.close = () =>
			toasts.update((toasts) => toasts.filter((t) => t.id != toast.id));
		setTimeout(toast.close, 3750);
	}

	window['popToast'] = popToast;
</script>

<script lang="ts">
</script>

<div class="absolute bottom-5 left-5">
	{#each $toasts as toast (toast.id)}
		<div
			in:receive={{ key: toast.id }}
			out:send={{ key: toast.id }}
			animate:flip={{ duration: 300 }}
			class="w-64 md:w-[28rem] mt-2.5 rounded text-white pl-3.5 pr-3 py-2 bg-{toast.status}-500 flex items-center bg-opacity-100"
		>
			<!-- <svg
			focusable="false"
			data-icon="exclamation-triangle"
			class="w-4 h-4 mr-3 fill-current"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 576 512"
		>
			<path
				fill="currentColor"
				d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
			/>
		</svg> -->
			<span>{toast.text}</span>
			<flex-spacer class="grow" />
			<button
				type="button"
				class="transition hover:opacity-70"
				data-mdb-dismiss="toast"
				aria-label="Close"
				on:click={() => toast.close()}
				><svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg></button
			>
		</div>
	{/each}
</div>

{#if false}
	<tailwind-loader class="bg-red-500" />
	<tailwind-loader class="bg-green-500" />
	<tailwind-loader class="bg-yellow-500" />
	<tailwind-loader class="bg-zinc-500" />
{/if}
