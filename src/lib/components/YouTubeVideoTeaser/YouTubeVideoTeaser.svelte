<script lang="ts">
	export let id: string;
	export let title: string;
	export let date: Date;
	export let offset: number = 0;

	$: backDate = (() => {
		const backDate = new Date(date.valueOf());
		backDate.setDate(backDate.getDate() + Math.max(0, offset));
		return backDate;
	})();

	let hasLoaded = false;
</script>

<a href={`https://youtube.com/watch?v=${id}`}>
	<figure>
		<img
			on:load={() => (hasLoaded = true)}
			data-loaded={hasLoaded ? '' : undefined}
			src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
			role="none"
			alt=""
			loading="lazy"
		/>
	</figure>
	<article>
		<h2>{title.replaceAll(`&#39;`, `'`)}</h2>
		<p>
			{backDate.toLocaleDateString()}
			{#if offset > 0} ⏎ <del>{date.toLocaleDateString()}</del>{/if}
		</p>
	</article>
</a>

<style>
	a {
		display: block;
		width: 100%;
		text-decoration: none;
	}

	figure {
		margin: 0;
		padding: 0;
		border: 4px solid var(--screen-black-color);
		background-color: var(--screen-white-color);
	}

	img {
		opacity: 0;
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		transition: opacity 0.25s;
	}

	img[data-loaded] {
		opacity: 1;
	}

	article {
		padding: 8px 4px 0;
	}

	h2 {
		margin: 0;
		font-weight: bold;
		font-size: 20px;
		font-size: clamp(18px, 4vw, 24px);
		line-height: 1.2;
	}

	p {
		margin: 4px 0 0;
		letter-spacing: 0.05em;
		color: var(--screen-black-color);
	}

	del {
		opacity: 0.5;
		filter: blur(1px);
	}
</style>
