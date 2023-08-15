<script lang="ts">
	import { onMount } from 'svelte';
	import Game from '../../Game.svelte';
	import { changePath } from '../../frame';

	onMount(() => {
		changePath(
			'/community/dlbnd-beaaa-aaaaa-qaana-cai/channel/89226699615946440445266045583032821468'
		);
	});
</script>

<Game game={'Poker'} />
