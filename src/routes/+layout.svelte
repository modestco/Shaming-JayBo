<script>
	import Header from './Header.svelte';
	import './styles.css';
  import SocialIcons from '@rodneylab/svelte-social-icons';
	import Tips from './Tips.svelte';
</script>



<div class="app">
	<Header />

	<main>
		<slot />
		<Tips />
	</main>

	<footer>
		<SocialIcons network="github" fgColor="#eeeeee" bgColor="#111111" />
<SocialIcons  network="github" fgColor="#eeeeee" bgColor="#111111" />

		Copyright 2023 @theshamingofJay.
		Proudly coded by @jenfrommodest with ♥︎ & 🍻 

	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}



	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
