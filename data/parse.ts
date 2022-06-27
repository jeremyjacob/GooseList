import { parse } from 'https://deno.land/std@0.145.0/encoding/csv.ts';

const content = await parse(await Deno.readTextFile('groceries.csv'));

const set = new Set();
for (const row of content.slice(1)) {
	// console.log(row);
	set.add(row[2]);
}

await Deno.writeTextFile('./output.csv', [...set].join(',\n'));
