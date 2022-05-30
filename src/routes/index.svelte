<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from '$lib/logo/Logo.svelte';
	import Picker from '$lib/picker/Picker.svelte';

	const onSelectDate = (event: { detail: Date }) => {
		const date = event.detail;
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');

		goto(`/${year}-${month}-${day}/`);
	};
</script>

<svelte:head>
	<title>backdate</title>
	<meta
		name="description"
		content="Playdate videos from YouTube, delayed until your season begins"
	/>
</svelte:head>

<section>
	<h1>
		<Logo />
	</h1>
	<p>Playdate videos from YouTube, delayed until your season begins</p>
	<Picker on:selectDate={onSelectDate} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		max-width: 480px;
		margin-bottom: 0;
	}
</style>
