<script lang="ts">
	export let id: string;
	export let src: string;
	export let title: string;
</script>

<div class="chat">
	<div class="header">
		<h3>Chat</h3>
	</div>

	<iframe {id} {title} {src} frameborder="0" />
</div>

<style lang="css">
	.chat {
		height: 100%;
		background-color: #191b1c;
		border: 1px solid #398e75;
		display: flex;
		flex-direction: column;
	}
	.header {
		background-color: #398e75;
		color: #fff;
		padding: 10px;
		text-align: center;
		filter: drop-shadow(0px 15px 8px rgba(0, 0, 0, 0.5));
	}

	.header h3 {
		margin: 0;
	}
	iframe {
		width: 100%;
		flex: 1 1 auto;
	}
</style>
