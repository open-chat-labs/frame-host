<script lang="ts">
	import { onMount } from 'svelte';
	import Game from '../../Game.svelte';
	import { clientStore } from '../../store';

	onMount(() => {
		$clientStore.then((client) =>
			client.changePath(
				'/community/rfeib-riaaa-aaaar-ar3oq-cai/channel/339330847874206790062149868949893812438'
			)
		);
	});
</script>

<Game game={'Roulette'} />
