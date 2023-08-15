<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<div class={`panel ${size}`}>
	<slot />
</div>

<style lang="css">
	.panel {
		background-color: #efefef;
		flex: auto;
	}

	.panel.sm {
		flex: 0 0 33%;
	}

	.panel.md {
		flex: 0 0 50%;
	}

	.panel.lg {
		flex: 0 0 66%;
	}
</style>
