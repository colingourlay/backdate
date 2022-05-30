import { getCurrentDaysSincePlaydateEpoch } from '$lib/utils/time';

const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/`;

/** @type {import('./__types/[days]').RequestHandler} */
export async function get({ params }) {
	const { days: backdateDays } = params;
	const daysSinceEpoch = getCurrentDaysSincePlaydateEpoch() - backdateDays;

	let records = [];
	let offset = '';
	let isDone = false;

	while (!isDone) {
		const dataURL = `${AIRTABLE_BASE_URL}YouTube%20Videos?fields%5B%5D=id&fields%5B%5D=title&fields%5B%5D=date${
			offset ? `&offset=${offset}` : ''
		}&filterByFormula=AND(days_since_epoch+%3C%3D+${daysSinceEpoch}%2C+hide+%3D+False())`;
		// const dataURL = `${AIRTABLE_BASE_URL}YouTube%20Videos?fields%5B%5D=id&fields%5B%5D=title&fields%5B%5D=date${
		// 	offset ? `&offset=${offset}` : ''
		// }&filterByFormula=AND(AND(days_since_epoch+%3C%3D+${daysSinceEpoch}%2C+hide+%3D+False())%2C+has_season_content+%3D+True())`;

		const dataResponse = await fetch(dataURL, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${AIRTABLE_TOKEN}`,
				'Content-Type': 'application/json'
			}
		});

		if (dataResponse.ok) {
			const data = await dataResponse.json();

			records = [...records, ...data.records];

			if (data.offset) {
				offset = data.offset;
			} else {
				isDone = true;
			}
		} else {
			isDone = true;
		}
	}

	if (records.length > 0) {
		return {
			body: {
				records
			}
		};
	}

	return {
		status: 404
	};
}
