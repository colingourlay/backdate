import type {
	ContentAPIResponseData,
	YouTubeVideoMetaSerialised,
	YouTubeVideoMeta
} from '$lib/constants';

export const normaliseFields = (fields: YouTubeVideoMetaSerialised): YouTubeVideoMeta => ({
	...fields,
	date: new Date(fields.date)
});

export const getItems = (data: ContentAPIResponseData) =>
	data.records
		.map((record) => normaliseFields(record.fields))
		.sort((a, b) => Number(b.date) - Number(a.date));
