import { Variant } from "../types/Rejection";

const formatNumberForDate = (num: number): string =>
	`${(num + "").padStart(2, "0")}`;

export const datetimeFormatter = (date = new Date()): string =>
	`${formatNumberForDate(date.getDate())}/${formatNumberForDate(
		date.getMonth() + 1
	)}/${date.getFullYear()}`;

export const generateRandomId = (): string =>
	Math.random().toString(36).slice(2);

export const getStyleStr = (styleObj: object): string =>
	Object.keys(styleObj)
		.map((property) => {
			return `${property}: ${styleObj[property]};`;
		})
		.join("\n");

export const getStyleObj = (variant = Variant.NORMAL): object => {
	switch (variant) {
		case Variant.PRIMARY:
			return {
				"background-color": "#009a00",
			};
		case Variant.DANGER:
			return {
				"background-color": "#fc0003",
			};
		default:
			return {
				"background-color": "#efefef",
			};
	}
};
