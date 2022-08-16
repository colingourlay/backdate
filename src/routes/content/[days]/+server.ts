import { error, json } from '@sveltejs/kit';
import type { ContentAPIResponseData, ContentAPIRecord } from '$lib/constants';
import { getCurrentDaysSincePlaydateEpoch } from '$lib/utils/time';
import type { RequestHandler } from './$types';

const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/`;

export const GET: RequestHandler = async ({ params }) => {
	const { days: backdateDays } = params;
	const daysSinceEpoch = getCurrentDaysSincePlaydateEpoch() - parseInt(backdateDays, 10);

	let records: ContentAPIRecord[] = [];
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
			const data = (await dataResponse.json()) as ContentAPIResponseData;

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

	if (records.length === 0) {
		return json({
			records,
			params
		});
		// throw error(500, 'No records to show');
	}

	return json({
		records
	});
};
