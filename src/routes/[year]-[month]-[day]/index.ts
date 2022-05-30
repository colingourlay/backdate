type Request = {
	params: {
		year: string;
		month: string;
		day: string;
	};
};

export async function get({ params }: Request) {
	const { year, month, day } = params;

	let date: Date;

	try {
		date = new Date(Number(year), Number(month) - 1, Number(day));
	} catch (err) {
		return {
			status: 404
		};
	}

	if (!(date instanceof Date)) {
		return {
			status: 404
		};
	}

	return {
		body: { date }
	};
}
