<a href="https://ko-fi.com/collypops">
	<em>Buy me a coffee?</em>
	<img class="steam" role="none" alt="" src="/images/steam.png" />
	<img class="steam" role="none" alt="" src="/images/steam.png" />
	<img class="steam" role="none" alt="" src="/images/steam.png" />
	<img class="cup" role="none" alt="Ko-fi logo" src="/images/ko-fi-cup.png" />
</a>

<style>
	a {
		font-size: 1rem;
		font-weight: 500;
		letter-spacing: 0.01em;
		text-decoration: none;
		outline-offset: 0.1875em;
		padding: 0.1875rem 0.375rem 0.25em 0.5em;
		display: flex;
		align-items: center;
		gap: 0.5em;
		position: relative;
		cursor: pointer;
	}

	a::before {
		content: '';
		background-color: var(--accent-color);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: skew(-12deg);
		border-radius: 4px;
	}

	a:hover {
		text-decoration: none;
		box-shadow: none;
	}

	em,
	img {
		z-index: 1;
	}

	em {
		color: #fff;
	}

	.steam {
		opacity: 0;
		position: absolute;
		bottom: calc(100% - 0.5rem);
		right: 0.5rem;
		width: 2em;
		height: auto;
		aspect-ratio: 0.6197183099;
		animation: risingSteam 6s linear both infinite;
		/* filter: brightness(2); */
		will-change: opacity;
	}

	@keyframes risingSteam {
		0% {
			opacity: 0;
			transform: translate(0, 1rem);
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translate(0, -1rem) rotateY(360deg);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.steam {
			opacity: 1;
			filter: brightness(2);
		}

		.steam + .steam {
			animation-delay: -2s;
		}

		.steam + .steam + .steam {
			animation-delay: -4s;
		}
	}

	.cup {
		width: 1.75em;
	}
</style>
