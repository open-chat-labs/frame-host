import { writable } from 'svelte/store';
import type { OpenChatXFrame } from './frame';

export const clientStore = writable<Promise<OpenChatXFrame>>();
