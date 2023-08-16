<script>
	import { page } from '$app/stores';
</script>

<header>

	<nav>

		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">JayBoNation</a>
			</li>
			<li aria-current={$page.url.pathname === '/honorable' ? 'page' : undefined}>
				<a href="/honorable">Honorable Bos</a>
			</li>
		</ul>

	</nav>

</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		margin: 0 auto;
		--background: #000;
	}

	ul {
		position: relative;
		padding: 10px;
		margin: 10px;
		height: 3em;
		display: flex;
		border-radius: 20px;
		justify-content: space-evenly;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		font-weight: 300;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 400;
		font-size: 1rem;
		font-family: var(--font-heading);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
