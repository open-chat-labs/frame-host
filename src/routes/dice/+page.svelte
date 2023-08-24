<script lang="ts">
	import { onMount } from 'svelte';
	import Game from '../../Game.svelte';
	import { clientStore } from '../../store';

	onMount(() => {
		$clientStore.then((client) =>
			client.changePath(
				'/community/rfeib-riaaa-aaaar-ar3oq-cai/channel/303152962395641539015013953956440145037'
			)
		);
	});
</script>

<Game game={'Dice'} />
