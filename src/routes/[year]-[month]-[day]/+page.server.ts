import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { year, month, day } = params;

	let date: Date;

	try {
		date = new Date(Number(year), Number(month) - 1, Number(day));
	} catch (err) {
		throw error(404);
	}

	if (!(date instanceof Date)) {
		throw error(404);
	}

	return { date };
};
