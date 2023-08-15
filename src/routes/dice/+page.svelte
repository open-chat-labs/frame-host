<script lang="ts">
	import { onMount } from 'svelte';
	import Game from '../../Game.svelte';
	import { changePath } from '../../frame';

	onMount(() => {
		changePath(
			'/community/dlbnd-beaaa-aaaaa-qaana-cai/channel/187926198665333730883166945784756867875'
		);
	});
</script>

<Game game={'Dice'} />
