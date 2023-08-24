<script lang="ts">
	import { onMount } from 'svelte';
	import { initialise } from './frame';
	import { clientStore } from './store';

	let iframe: HTMLIFrameElement;

	let brightGreen = '#00ffbf';
	let mediumGreen = '#039c67';
	let darkGreen = '#026f4a';

	onMount(() => {
		console.log('XFRAME_HOST: setting client in store');
		clientStore.set(
			initialise(iframe, {
				targetOrigin: 'https://webtest.oc.app',
				initialPath:
					'/community/rfeib-riaaa-aaaar-ar3oq-cai/channel/334961401678552956581044255076222828441',
				theme: {
					kind: 'update_theme',
					name: 'betbase',
					base: 'dark',
					overrides: {
						burst: false,
						primary: mediumGreen,
						bd: 'rgb(91, 243, 190)',
						bg: 'transparent',
						txt: mediumGreen,
						placeholder: darkGreen,
						'txt-light': '#75c8af',
						timeline: {
							txt: brightGreen
						},
						time: {
							txt: brightGreen,
							icon: brightGreen
						},
						menu: {
							bd: 'rgb(91, 243, 190)',
							separator: 'rgb(91, 243, 190)'
						},
						scrollbar: {
							bg: 'linear-gradient(to top, transparent, #71fbb2, transparent) border-box'
						},
						button: {
							bg: mediumGreen,
							hv: darkGreen
						},
						icon: {
							txt: brightGreen
						},
						currentChat: {
							date: {
								bd: `solid 1px ${brightGreen}`,
								bg: 'rgba(0,0,0,0.8)',
								txt: brightGreen
							},
							msg: {
								bd: `solid 1px ${brightGreen}`,
								sh: 'inset 0 0 1px rgb(91 243 190), rgb(91 243 190) 0 0 6px 0px inset',
								me: {
									bg: '#0f151874',
									txt: '#fff'
								},
								txt: '#75c8af'
							}
						}
					}
				}
			})
		);
	});
</script>

<div class="chat">
	<div class="header">
		<h3>Chat</h3>
	</div>

	<iframe bind:this={iframe} title="OpenChat" frameborder="0" />
</div>

<style lang="css">
	.chat {
		height: 100%;
		display: flex;
		flex-direction: column;
		background: rgb(0 0 0 / 6%);
		backdrop-filter: blur(5px);
		border: 1px solid rgb(91, 243, 190);
		border-radius: 13px;
	}
	.header {
		color: #fff;
		padding: 10px;
		text-align: center;
		border-bottom: 1px solid rgb(91, 243, 190);
		filter: drop-shadow(0px 10px 8px rgba(0, 0, 0, 0.3));
	}

	.header h3 {
		margin: 0;
	}
	iframe {
		width: 100%;
		flex: 1 1 auto;
	}
</style>
