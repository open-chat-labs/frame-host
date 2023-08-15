let frame: HTMLIFrameElement | undefined;

const changeTheme: unknown = {
	kind: 'update_theme',
	name: 'betbase',
	base: 'dark',
	overrides: {
		burst: false,
		primary: 'rgba(114, 223, 175, 1)',
		bd: '#398E75',
		bg: '#191B1C',
		txt: '#398E75',
		placeholder: '#398E75',
		'txt-light': '#75c8af',
		timeline: {
			txt: '#75c8af'
		},
		scrollbar: {
			bg: '#398E75'
		},
		button: {
			bg: '#398E75',
			hv: '#2d715d'
		},
		icon: {
			txt: '#75c8af'
		},
		currentChat: {
			msg: {
				me: {
					bg: '#398E75',
					txt: '#fff'
				},
				txt: '#75c8af'
			}
		}
	}
};

const isReady = new Promise<HTMLIFrameElement>((resolve) => {
	console.log('XFRAME_HOST: initialising xframe coms');
	function loadFrame() {
		frame = document.getElementById('chat-frame') as HTMLIFrameElement;
		if (frame) {
			console.log('XFRAME_HOST: adding load handler to iframe');
			frame.addEventListener('load', () => {
				console.log('XFRAME_HOST: iframe loaded');
				sendMessage(frame!, changeTheme);
				resolve(frame!);
			});
		} else {
			setTimeout(loadFrame, 10);
		}
	}
	loadFrame();
});

function sendMessage(frame: HTMLIFrameElement, msg: unknown) {
	console.log('XFRAME_HOST: sending message', msg);
	if (frame && frame.contentWindow) {
		try {
			frame.contentWindow.postMessage(msg, 'http://localhost:5001');
		} catch (err) {
			console.error('XFRAME_HOST: Error sending message to iframe', err);
		}
	}
}

export function changePath(path: string) {
	isReady.then((frame) => {
		sendMessage(frame, {
			kind: 'change_route',
			path
		});
	});
}
