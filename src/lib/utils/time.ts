import { ONE_DAY_IN_MS, PLAYDATE_EPOCH } from '$lib/constants';

export const getDateDaysSincePlaydateEpoch = (date: Date) => {
	const msSincePlaydateEpoch = Number(date) - Number(PLAYDATE_EPOCH);

	return Math.floor(msSincePlaydateEpoch / ONE_DAY_IN_MS);
};

export const getCurrentDaysSincePlaydateEpoch = () => getDateDaysSincePlaydateEpoch(new Date());

export const offsetDateByDays = (date: Date, numDays: number) => {
	const backDate = new Date(date.valueOf());

	backDate.setDate(backDate.getDate() + numDays);
	return backDate;
};
