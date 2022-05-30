<script lang="ts">
	import { onMount } from 'svelte';
	import type { ContentAPIResponseData, YouTubeVideoMeta } from '$lib/constants';
	import { getItems } from '$lib/utils/content';
	import { getDateDaysSincePlaydateEpoch } from '$lib/utils/time';
	import YouTubeVideoTeaser from '$lib/components/YouTubeVideoTeaser/YouTubeVideoTeaser.svelte';

	export let date: string;

	let items: YouTubeVideoMeta[];

	$: days = getDateDaysSincePlaydateEpoch(new Date(date));

	onMount(async () => {
		const response = await fetch(`/content/${days}`);
		const data = (await response.json()) as ContentAPIResponseData;

		items = getItems(data);
	});
</script>

<!-- <h1>Date: {new Date(date).toDateString()}</h1> -->
{#if items}
	<ul>
		{#each items as item}
			<li>
				<YouTubeVideoTeaser id={item.id} title={item.title} date={item.date} offset={days} />
			</li>
		{/each}
	</ul>
{:else}
	<h1>Loading…</h1>
{/if}

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 20px 20px;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}

	li {
		margin: 0;
		padding: 0;
	}

	h1 {
		margin: auto;
		text-align: center;
		font-weight: bold;
		opacity: 0.125;
	}
</style>
