export type YouTubeVideoMeta = {
	id: string;
	title: string;
	date: Date;
	days_since_epoch: number;
};

export type YouTubeVideoMetaSerialised = {
	id: string;
	title: string;
	date: string;
	days_since_epoch: number;
};

export type ContentAPIRecord = {
	id: string;
	createdTime: string;
	fields: YouTubeVideoMetaSerialised;
};

export type ContentAPIResponseData = {
	records: ContentAPIRecord[];
	offset?: string;
};

export const PLAYDATE_EPOCH = new Date(2022, 3, 18);
export const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
