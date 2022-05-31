<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Readable } from 'svelte/store';
	import { InlineCalendar } from 'svelte-calendar';
	import Button from '$lib/components/Button/Button.svelte';
	import { PLAYDATE_EPOCH } from '$lib/constants';
	import { offsetDateByDays } from '$lib/utils/time';
	import { THEME } from './constants';

	let shouldShowCalendar = false;
	let store: Readable<{ hasChosen: boolean; selected: Date }> & InlineCalendar['store'];

	const dispatch = createEventDispatcher();

	const buttonsEffects = {
		Today: () => dispatch('selectDate', new Date()),
		'This Week': () =>
			dispatch('selectDate', offsetDateByDays(new Date(), -1 * new Date().getDay() + 1)),
		Earlier: () => (shouldShowCalendar = true)
	};

	$: $store?.hasChosen && dispatch('selectDate', $store.selected);
</script>

<div>
	{#if shouldShowCalendar}
		<InlineCalendar bind:store theme={THEME} start={PLAYDATE_EPOCH} end={new Date()} />
	{:else}
		<menu>
			{#each Object.keys(buttonsEffects) as label}
				<Button on:click={buttonsEffects[label]}>{label}</Button>
			{/each}
		</menu>
	{/if}
</div>

<style>
	div :global(.controls) {
		font-size: 1.25em;
	}

	div :global(.controls) > :global(*) {
		height: 25px;
	}

	div :global(.controls) > :global(*) > :global(i) {
		width: 11px;
		height: 11px;
	}

	menu {
		margin: 20px 0 auto;
		padding: 0;
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	}
</style>
