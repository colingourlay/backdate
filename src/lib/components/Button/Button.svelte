<button on:click>
	<slot />
</button>

<style>
	button {
		-webkit-appearance: none;
		appearance: none;
		cursor: pointer;
		display: block;
		width: 100%;
		padding: 0.5em 1em;
		border: 4px solid currentColor;
		outline-offset: 0.1875em;
		background-color: var(--screen-white-color);
		color: var(--screen-black-color);
		font-weight: bold;
		font-size: 1.25em;
	}
</style>
