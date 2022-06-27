import { linear, quintOut, cubicOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

export function fadeSlide(
	node,
	{ delay = 0, duration = 400, easing = linear, enabled = true } = {}
) {
	const o = +getComputedStyle(node).opacity;
	return {
		delay,
		duration,
		easing,
		css: (t) =>
			enabled &&
			`transform: translateY(${10 * (1 - t)}px);
			opacity: ${t * o};`,
	};
}

export function slideOut(
	node,
	{ delay = 0, duration = 400, easing = cubicOut, enabled = true } = {}
) {
	const o = +getComputedStyle(node).opacity;
	return {
		delay,
		duration,
		easing,
		css: (t) =>
			enabled &&
			`height: ${60 * t}px;
			opacity: ${(t - 0.5) * o * 2};`,
	};
}

export function fadeScale(
	node,
	{ delay = 0, duration = 400, easing = quintOut, enabled = true } = {}
) {
	const o = +getComputedStyle(node).opacity;
	return {
		delay,
		duration,
		easing,
		css: (t) =>
			enabled &&
			`transform: scale(${t * 0.3 + 0.7});
			opacity: ${t * o};`,
	};
}

export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 200),

	fallback(node, params) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: 600,
			easing: quintOut,
			css: (t) => `
				transform: ${transform} scale(${t * 0.3 + 0.7});
				opacity: ${t}
			`,
		};
	},
});
