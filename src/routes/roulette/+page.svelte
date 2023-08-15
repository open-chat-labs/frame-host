<script lang="ts">
	import { onMount } from 'svelte';
	import Game from '../../Game.svelte';
	import { changePath } from '../../frame';

	onMount(() => {
		changePath(
			'/community/dlbnd-beaaa-aaaaa-qaana-cai/channel/271175645542131031871000278152928877485'
		);
	});
</script>

<Game game={'Roulette'} />
