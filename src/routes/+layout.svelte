<script lang="ts">
	import Frame from '../OpenChatFrame.svelte';
	import Content from '../Content.svelte';
	import '../frame';
</script>

<div class="layout">
	<nav class="nav">
		<a href="/">Home</a>
		<a href="/dice">Dice</a>
		<a href="/poker">Poker</a>
		<a href="/roulette">Roulette</a>
	</nav>

	<Content>
		<Frame slot="left" />
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
