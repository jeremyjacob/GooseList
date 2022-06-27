import { writable } from 'svelte/store';
import { createClient } from '@supabase/supabase-js';
import { popToast, Status } from '@components/Toasts.svelte';
import type { definitions } from '@data/types/supabase';

export const supabase = createClient(
	'https://ypacdpbtypoebvjyhynv.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwYWNkcGJ0eXBvZWJ2anloeW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU0MTYwNDYsImV4cCI6MTk3MDk5MjA0Nn0.s20DHSLn4Yly2xYBD8tMV1qrD7tVnxajVBkkC-Tx17k'
);
window['supabase'] = supabase;

export const user = writable(supabase.auth.user());
supabase.auth.onAuthStateChange((_, s) => user.set(s.user));
export const groceries = writable<Grocery[]>(await getGroceries(1));

export async function getGroceries(list: number) {
	const { data, error } = await supabase
		.from<definitions['Groceries']>('Groceries')
		.select()
		.eq('list', list);
	// await supabase
	// 	.from('Groceries')
	// 	.on('*', (payload) => {
	// 		console.log('Change received!', payload);
	// 	})
	// 	.subscribe();
	if (error) {
		popToast({ status: Status.Error, text: error.message });
		return [];
	}

	const time = (date: Grocery) => new Date(date.checked_at).getTime();
	return data.sort((a, b) => time(a) - time(b));
}

export async function toggleGrocery(grocery: Grocery) {
	grocery.checked = !grocery.checked;
	grocery.checked_at = new Date();
	groceries.update((gs) => [
		grocery,
		...gs.filter((g) => g.id != grocery.id),
	]);
	const res = await supabase
		.from('Groceries')
		.update(grocery)
		.eq('id', grocery.id);
	console.log(res);
}
