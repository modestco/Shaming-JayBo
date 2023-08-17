<script>
	import honbo from '$lib/images/hon-bo.svg';
</script>

<svelte:head>
	<title>Honorable Bos</title>
	<meta name="description" content="Honorable members of the #Jaybonation family" />
</svelte:head>

<img src={honbo} alt="Honorable Bos" class="honorableimg"/>
<div>
	<h1>Extended Family of JayBoNation</h1>


	<p>
		We love our growing list of Honorable Bos. Below you'll find all the familiar faces from our streams and how to get in touch with them. 
	</p>

	
</div>

<style>
	h1 {
		font-size: 3rem;
		text-align: center;
		font-family: var(--font-heading);
		color: var(--color-theme-1);
		margin: 0;
		padding: 0;
	}

	p {
		font-size: 1rem;
		text-align: center;
		font-family: var(--font-body);
		font-weight: 300;
		margin: 0;
		padding: 0;
		max-width: 500px;
	}
	.honorableimg {
		max-width: 300px;
		margin: 10px auto;
		display: flex;
	}
</style>