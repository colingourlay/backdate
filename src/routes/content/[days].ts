import { getCurrentDaysSincePlaydateEpoch } from '$lib/utils/time';

const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/`;

/** @type {import('./__types/[days]').RequestHandler} */
export async function get({ params }) {
	const { days: backdateDays } = params;
	const daysSinceEpoch = getCurrentDaysSincePlaydateEpoch() - backdateDays;

	const dataURL = `${AIRTABLE_BASE_URL}YouTube%20Videos?filterByFormula=AND(days_since_epoch+%3C%3D+${daysSinceEpoch}%2C+hide+%3D+False())`;

	const dataResponse = await fetch(dataURL, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${AIRTABLE_TOKEN}`,
			'Content-Type': 'application/json'
		}
	});

	if (dataResponse.ok) {
		return {
			body: await dataResponse.json()
		};
	}

	return {
		status: 404
	};
}
