<script lang="ts">
	function newGrocery() {}
</script>

<div
	class="w-full h-16 bg-zinc-100 bg-opacity-70 fixed bottom-0 border-zinc-200 border-t backdrop-blur-lg flex items-center text-groose-medium gap-2.5"
	on:click={newGrocery}
>
	<svg
		class="ml-[1.25rem]"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM13.5 5.42136C13.5 4.59294 12.8284 3.92136 12 3.92136C11.1716 3.92136 10.5 4.59294 10.5 5.42136V10.5H5.42136C4.59294 10.5 3.92136 11.1716 3.92136 12C3.92136 12.8284 4.59294 13.5 5.42136 13.5H10.5V18.5786C10.5 19.4071 11.1716 20.0786 12 20.0786C12.8284 20.0786 13.5 19.4071 13.5 18.5786V13.5H18.5786C19.4071 13.5 20.0786 12.8284 20.0786 12C20.0786 11.1716 19.4071 10.5 18.5786 10.5H13.5V5.42136Z"
			fill="currentColor"
		/>
	</svg>
	<span class="font-bold text-md cursor-pointer">New Grocery</span>
</div>
