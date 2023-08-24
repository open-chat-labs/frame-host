<script lang="ts">
	import Panel from './Panel.svelte';
</script>

<div class="content">
	<Panel size="sm">
		<slot name="left" />
	</Panel>
	<Panel size="auto">
		<slot name="right" />
	</Panel>
</div>

<style lang="css">
	.content {
		flex: auto;
		display: flex;
		gap: 20px;
	}
</style>
