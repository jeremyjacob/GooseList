import { spring } from 'svelte/motion';
import { writable } from 'svelte/store';

export const canSwipeCard = writable(true);
export const canScrollPage = writable(true);
