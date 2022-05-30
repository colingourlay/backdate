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
			width: '90vw',
			maxWidth: '420px'
		}
	};

	let store: Readable<{ hasChosen: boolean; selected: Date }> & InlineCalendar['store'];

	$: $store?.hasChosen && dispatch('selectDate', $store.selected);
</script>

<InlineCalendar bind:store {theme} start={PLAYDATE_EPOCH} end={new Date()} />
