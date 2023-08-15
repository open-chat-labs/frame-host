<script lang="ts">
	import Frame from '../Frame.svelte';
	import Content from '../Content.svelte';
	import '../frame';

	const url =
		'http://localhost:5001/community/dlbnd-beaaa-aaaaa-qaana-cai/channel/62805517406794080361061305900584248026';
</script>

<div class="layout">
	<nav class="nav">
		<a href="/">Home</a>
		<a href="/dice">Dice</a>
		<a href="/poker">Poker</a>
		<a href="/roulette">Roulette</a>
	</nav>

	<Content>
		<Frame slot="left" id={'chat-frame'} title="chat frame" src={url} />
		<slot slot="right" />
	</Content>
</div>

<style lang="css">
	.layout {
		height: 100dvh;
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.nav {
		flex: 0 0 40px;
	}
</style>
