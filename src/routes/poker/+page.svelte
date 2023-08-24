<script lang="ts">
	import { onMount } from 'svelte';
	import Game from '../../Game.svelte';
	import { clientStore } from '../../store';

	onMount(() => {
		$clientStore.then((client) =>
			client.changePath(
				'/community/rfeib-riaaa-aaaar-ar3oq-cai/channel/162740522485531351121872876384540877260'
			)
		);
	});
</script>

<Game game={'Poker'} />
