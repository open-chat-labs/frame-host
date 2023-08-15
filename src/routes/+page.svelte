<script lang="ts">
	import { onMount } from 'svelte';
	import Game from '../Game.svelte';
	import { changePath } from '../frame';

	onMount(() => {
		changePath(
			'/community/dlbnd-beaaa-aaaaa-qaana-cai/channel/62805517406794080361061305900584248026'
		);
	});
</script>

<Game game={'General'} />
