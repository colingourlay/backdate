import { get as getDays } from './[days]';

/** @type {import('./__types').RequestHandler} */
export async function get() {
	return getDays({ params: { days: 0 } });
}
