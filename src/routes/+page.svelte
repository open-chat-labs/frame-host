<script lang="ts">
	import { onMount } from 'svelte';
	import Game from '../Game.svelte';
	import { clientStore } from '../store';

	onMount(() => {
		$clientStore.then((client) =>
			client.changePath(
				'/community/rfeib-riaaa-aaaar-ar3oq-cai/channel/334961401678552956581044255076222828441'
			)
		);
	});
</script>

<Game game={'General'} />
