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
		border: 1px solid rgb(91, 243, 190);
		border-radius: 13px;
		color: #fff;
		padding: 20px;
		height: 100%;
	}
</style>
