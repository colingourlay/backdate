<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Error {$page.status}</h1>
{#if $page.error}
	<h2>{$page.error.message}</h2>
{/if}
