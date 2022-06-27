<script lang="ts">
	import GroceryGoose from './GroceryGoose.svelte';
	import { supabase } from '@data/data';
	import { popToast, Status } from '@components/Toasts.svelte';
	import { fadeScale } from '@functions/animations';

	let linkSent = false;
	let linkSentVisualy = false;
	$: {
		linkSent;
		const x = linkSent;
		setTimeout(() => {
			if (linkSent == x) linkSentVisualy = x;
		}, 500);
	}

	let loginButton: HTMLButtonElement;
	let gooseLogo: HTMLDivElement;
	let input: HTMLInputElement;
	let email: string;

	async function login() {
		gooseLogo.classList.add('hop');
		linkSent = true;
		setTimeout(() => {
			if (!linkSent) return;
			gooseLogo.classList.remove('hop');
			loginButton.blur();
		}, 400);

		try {
			const res = await supabase.auth.signIn({
				email,
			});
			if (res.error) {
				popToast({ status: Status.Error, text: res.error.message });
				linkSent = false;
			}
			console.log({ res });
			return res;
		} catch (error) {
			popToast({ status: Status.Error, text: error });
			linkSent = false;
		}
		return null;
	}

	async function resend() {
		gooseLogo.classList.add('spin');
		setTimeout(() => gooseLogo.classList.remove('spin'), 700);
		login();
	}
</script>

<div
	class="min-h-screen bg-groose-pale flex flex-col justify-center sm:py-12"
	transition:fadeScale
>
	<div
		class="py-10 sm:px-0 xs:p-0 mx-auto md:w-full md:max-w-md mb-24 relative"
	>
		<h1 class="text-center text-3xl mb-4 text-groose-dark font-serif">
			Goose List
		</h1>
		<div class="absolute -top-7 right-6" bind:this={gooseLogo}>
			<GroceryGoose />
		</div>
		<div class="bg-white shadow rounded-lg divide-y divide-zinc-200">
			<form
				class="px-5 py-7 w-[90vw] max-w-md md:w-auto"
				on:submit|preventDefault={linkSentVisualy ? resend : login}
			>
				<label
					class="font-semibold text-sm text-zinc-600 pb-1 block"
					for="email"
					>{#if linkSentVisualy}
						Link sent to your Email
					{:else}
						Email
					{/if}</label
				>
				<div
					on:click={() => {
						linkSent = false;
						setTimeout(() => input.focus(), 0);
					}}
				>
					<input
						type="email"
						id="email"
						class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-groose-medium transition"
						disabled={linkSentVisualy}
						class:bg-zinc-100={linkSentVisualy}
						bind:this={input}
						bind:value={email}
					/>
				</div>
				<button
					type="submit"
					bind:this={loginButton}
					on:click|stopPropagation
					class="transition duration-200 bg-groose-500 hover:bg-groose-600 focus:bg-groose-700 focus:shadow-sm focus:ring-4 focus:ring-groose-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block {linkSentVisualy &&
						'text-groose-500 bg-transparent focus:bg-transparent hover:bg-transparent shadow-none hover:shadow-none'}"
				>
					{#if !linkSentVisualy}
						<span class="inline-block mr-2">Login</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="w-4 h-4 inline-block"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					{:else}
						<span class="inline-block mr-2">Resend email</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="w-4 h-4 inline-block"
						>
							<path
								d="M13.1715 4.52906C17.2976 4.52906 20.6425 7.87392 20.6425 12C20.6425 16.1261 17.2976 19.4709 13.1715 19.4709C9.04544 19.4709 5.70058 16.1261 5.70058 12C5.70058 10.3695 6.22292 8.86098 7.10938 7.63266M7.10938 7.63266L8.57065 11.454M7.10938 7.63266L3.35754 9.1875"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</svg>
					{/if}
				</button>
			</form>
		</div>
	</div>
</div>

<style>
	@keyframes hop {
		0% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-25px);
		}

		100% {
			transform: translateY(0);
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.hop {
		animation: hop 0.6s cubic-bezier(0.25, 1, 0.5, 1);
	}

	.spin {
		animation: spin 0.5s;
	}
</style>
