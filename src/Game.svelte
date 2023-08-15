<script lang="ts">
	export let game: string;
</script>

<div class="game">
	<h1>{game} Game</h1>
</div>

<style lang="css">
	.game {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #398e75;
		color: #fff;
		padding: 20px;
		height: 100%;
	}
</style>
