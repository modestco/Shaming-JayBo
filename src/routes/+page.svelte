<script>
	import jester from '$lib/images/jester.svg';
	import SocialIcons from '@rodneylab/svelte-social-icons';
	import heyJay from '$lib/images/HeyJayText.png'
	import JayMain from '$lib/images/Jay-main.png'
</script>

<svelte:head>
	<title>The Shaming Of Jay</title>
	<meta name="description" content="JayBoNation the home of @theshamingofjay" />
</svelte:head>

<section>
	<img src={jester} alt="TheShamingOfJay logo" class="jesterimg"/>
	<h5>WELCOME TO</h5>
	<div class="line"><h1 class="flipX">#JAYBONATION</h1></div>
	<h5>HOME OF</h5>
	<h2>@TheShamingOfJay</h2>
	<h5>on all platforms</h5>
	<div class="socials">
		<a href="https://www.tiktok.com/@theshamingofjay"class="socialIcons" target="_blank" rel="noopener norefferer"><SocialIcons network="tiktok" fgColor="#fff" bgColor="#ff3131"/></a>
		<a href="https://twitter.com/theshamingofjay"class="socialIcons" target="_blank" rel="noopener norefferer"><SocialIcons network="twitter" fgColor="#fff" bgColor="#ff3131"/></a>
		<a href="https://youtube.com/channel/UCForOtDhlJzRSJubBwMTCOQ"class="socialIcons" target="_blank" rel="noopener norefferer"><SocialIcons network="youtube" fgColor="#fff" bgColor="#ff3131"/></a>
		<a href="https://www.instagram.com/theshamingofjay"class="socialIcons" target="_blank" rel="noopener norefferer"><SocialIcons network="instagram" fgColor="#fff" bgColor="#ff3131"/></a>
		<a href="https://www.facebook.com/profile.php?id=100091070141123&mibextid=LQQJ4d"class="socialIcons" target="_blank" rel="noopener norefferer"><SocialIcons network="facebook" fgColor="#fff" bgColor="#ff3131"/></a>
	</div>
</section>
<div class="container">
<div>

	<img src={heyJay} alt="titleText" class="heyJayTitle">
	<p class="heyJayBody">
		Just another asshole on the internet. In 2021 my wife made me watch a Dateline on the Murdaughs and I started tweeting nonstop for 6 weeks about true crime. 4 months in and we're close to 5K on YouTube! With some help I’m hoping I can continue to make you laugh while I turn this into a full time gig.	</p>

</div>
	<img src={JayMain} alt="TheShamingOfJay" class="JayMain">
</div>

<style>

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
h1 {
	font-size: 3rem;
	text-align: center;
	font-family: var(--font-heading);
	margin: 0;
	padding: 0;
}
h2 {
	font-size: 3rem;
	text-align: center;
	font-family: var(--font-heading);
	margin: 0;
	padding: 0;
}
h5 {
	margin: 0;
	padding: 0;
	font-size: 1rem;
	font-family: var(--font-body);
	color: white;
	font-weight: 300;
}
.container {
	display:flex;
	flex-direction: row;
	align-items: center;
	margin: 0 auto;
	padding-top:50px;
}
.socials {
	padding: 10px;
}
.socialIcons {
	padding: 10px;
}

.jesterimg {
	max-width: 100px;
	margin-bottom: 30px;
}
.heyJayTitle {
	width: 70%;
	
	
}
.heyJayBody {
	justify-content: left;
	font-family: var(--font-body);
	color: white;
	font-weight: 300;
}


.JayMain {
	width: 50%;
	height: 50%;
	justify-content: right;
}
.line {
  width: 100%;
  
  overflow: hidden;
  font-family: var(--font-heading);
	color: var(--color-theme-1);
  padding: 0;
  
}
.flipX {
  animation: 1s anim-flipX ease 1s;
}
@keyframes anim-flipX {
  0% {
    opacity: 0;
    transform: rotateX(90def);
  }
  50% {
    opacity: 1;
    transform: rotateX(720deg);
  }
  100% {
    /* animate nothing to pause animation at the end */
    opacity: 1;
    transform: rotateX(720deg);
  }
}

</style>
