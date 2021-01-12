const formatNumberForDate = (num: number): string =>
	`${(num + "").padStart(2, "0")}`;

export const datetimeFormatter = (date = new Date()): string =>
	`${formatNumberForDate(date.getDate())}/${formatNumberForDate(
		date.getMonth() + 1
	)}/${date.getFullYear()}`;

export const generateRandomId = (): string =>
	Math.random().toString(36).slice(2);
