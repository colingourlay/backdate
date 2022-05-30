<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Readable } from 'svelte/store';
	import { InlineCalendar } from 'svelte-calendar';
	import { PLAYDATE_EPOCH } from '$lib/constants';

	const dispatch = createEventDispatcher();

	const theme = {
		calendar: {
			colors: {
				text: {
					primary: 'var(--screen-black-color)',
					highlight: '#fff'
				},
				background: {
					primary: '#fff',
					highlight: 'var(--accent-color)',
					hover: 'var(--screen-white-color)'
				},
				border: 'var(--screen-black-color)'
			},
			width: '85vw',
			maxWidth: '420px'
		}
	};

	let store: Readable<{ hasChosen: boolean; selected: Date }> & InlineCalendar['store'];

	$: $store?.hasChosen && dispatch('selectDate', $store.selected);
</script>

<div>
	<InlineCalendar bind:store {theme} start={PLAYDATE_EPOCH} end={new Date()} />
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
</style>
