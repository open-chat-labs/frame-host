type OpenChatXFrameOptions = {
	theme: unknown;
	targetOrigin: string;
	initialPath?: string;
};

export type OpenChatXFrame = {
	changePath: (path: string) => void;
};

function isFrameLoaded(iframe: HTMLIFrameElement) {
	return iframe && iframe.contentWindow && iframe.contentWindow.document.readyState === 'complete';
}

async function onFrameLoaded(
	iframe: HTMLIFrameElement,
	options: OpenChatXFrameOptions
): Promise<OpenChatXFrame> {
	console.debug('XFRAME_HOST: iframe loaded');
	return new Promise((resolve) => {
		console.debug('XFRAME_HOST: listening for openchat ready');
		window.addEventListener('message', (ev) => {
			console.debug('XFRAME_HOST: received message on window', ev);
			if (ev.origin === options.targetOrigin && ev.data === 'openchat_ready') {
				sendMessage(iframe, options.targetOrigin, options.theme);
				resolve({
					changePath: (path: string) => {
						sendMessage(iframe, options.targetOrigin, {
							kind: 'change_route',
							path
						});
					}
				});
			}
		});
	});
}

export function initialise(
	iframe: HTMLIFrameElement,
	options: OpenChatXFrameOptions
): Promise<OpenChatXFrame> {
	return new Promise<OpenChatXFrame>((resolve) => {
		iframe.src = options.initialPath
			? `${options.targetOrigin}${options.initialPath}`
			: options.targetOrigin;
		if (isFrameLoaded(iframe)) {
			onFrameLoaded(iframe, options).then(resolve);
		} else {
			iframe.addEventListener('load', () => {
				onFrameLoaded(iframe, options).then(resolve);
			});
		}
	});
}

function sendMessage(frame: HTMLIFrameElement, targetOrigin: string, msg: unknown) {
	console.debug('XFRAME_HOST: sending message', msg);
	if (frame && frame.contentWindow) {
		try {
			frame.contentWindow.postMessage(msg, targetOrigin);
		} catch (err) {
			console.error('XFRAME_HOST: Error sending message to iframe', err);
		}
	}
}
