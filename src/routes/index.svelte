<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from '$lib/components/Logo/Logo.svelte';
	import Picker from '$lib/components/Picker/Picker.svelte';

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
	<p>Avoid Season One spoilers by syncing YouTube content to the day you got your Playdate</p>
	<h2>When did your Playdate arrive?</h2>
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

	section > * {
		text-align: center;
	}

	h1 {
		width: 100%;
		max-width: 480px;
		margin: 0;
	}

	h1 + p {
		margin: 20px 20px 5vh;
		line-height: 1.5;
	}
</style>
