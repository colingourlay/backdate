<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/logo/Logo.svelte';
	import TipJar from '$lib/tip-jar/TipJar.svelte';
	import '../app.css';
</script>

{#if $page.url.pathname !== '/'}
	<header>
		<div>
			<a href="/">
				<Logo />
			</a>
		</div>
		<div />
	</header>
{/if}
<main>
	<slot />
</main>

<footer>
	<div>By <a href="https://colin-gourlay.com/">Colin Gourlay</a></div>
	<TipJar />
</footer>

<style>
	header {
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}

	header a {
		display: inline-block;
		max-width: 128px;
		padding: 20px;
		text-decoration: none;
	}

	header a:hover,
	header a:active {
		text-decoration: none;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 20px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
