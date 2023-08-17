<script>
	import Header from './Header.svelte';
	import './styles.css';
  import SocialIcons from '@rodneylab/svelte-social-icons';
	
</script>



<div class="app">
	<Header />

	<main>
		<slot />
		
	</main>
	<footer>
		<p class="footerP">Thank you to all our loyal bos for promoting <a href="https://twitter.com/hashtag/theboeffect?src=hashtag_click">#TheBoEffect</a><br /> We succeed because of the love and support from all of you.</p>
		<div class="socials">
		<a href="https://www.tiktok.com/@theshamingofjay"class="socialIcons" target="_blank" rel="noopener norefferer"><SocialIcons network="tiktok" width="35" height="35" fgColor="#fff" bgColor="#000" /></a>
		<a href="https://twitter.com/theshamingofjay"class="socialIcons" target="_blank" rel="noopener norefferer"><SocialIcons network="twitter" width="35" height="35" fgColor="#fff" bgColor="#000"/></a>
		<a href="https://youtube.com/channel/UCForOtDhlJzRSJubBwMTCOQ"class="socialIcons" target="_blank" rel="noopener norefferer"><SocialIcons network="youtube" width="35" height="35" fgColor="#fff" bgColor="#000"/></a>
		<a href="https://www.instagram.com/theshamingofjay"class="socialIcons" target="_blank" rel="noopener norefferer"><SocialIcons network="instagram" width="35" height="35" fgColor="#fff" bgColor="#000"/></a>
		<a href="https://www.facebook.com/profile.php?id=100091070141123&mibextid=LQQJ4d"class="socialIcons"  target="_blank" rel="noopener norefferer"><SocialIcons network="facebook" width="35" height="35" fgColor="#fff" bgColor="#000"/></a>
	</div>

		<p class="footerP">Copyright 2023 @theshamingofJay.
		Proudly coded by <a href="www.jenfrommodest.com">Jen</a> with ❤️‍🔥 & 🍻 </p>

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
.footerP {
	max-width: 75%;
	font-weight: 300;
	font-size: 0.8rem;
	text-align: center;	
}
	.socialIcons {
		width: 15px;
		padding: 5px;
	}


	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
