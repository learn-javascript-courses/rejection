import { createSelector } from "reselect";
import { IStateProps } from "./RejectionReducers";

export namespace RejectionSelectors {
	export const questions = (state: IStateProps) => state.questions;

	export const points = createSelector(questions, (questions) =>
		questions.reduce((acc, { status }) => {
			switch (status) {
				case "Accepted":
					return acc + 1;
				case "Rejected":
					return acc + 10;
				default:
					return acc;
			}
		}, 0)
	);
}
