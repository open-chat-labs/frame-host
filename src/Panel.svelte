<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' | 'auto' = 'md';
</script>

<div class={`panel ${size}`}>
	<slot />
</div>

<style lang="css">
	.panel {
		flex: auto;
	}

	.panel.sm {
		flex: 0 0 33%;
		max-width: 700px;
	}

	.panel.md {
		flex: 0 0 50%;
	}

	.panel.lg {
		flex: 0 0 66%;
	}

	.panel.auto {
		flex: auto;
	}
</style>
