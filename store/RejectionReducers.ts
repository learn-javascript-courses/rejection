import { Action } from "typescript-fsa";
import { IQuestion } from "../types/Rejection";
import { RejectionActions } from "./RejectionActions";

export interface IStateProps {
	questions: IQuestion[];
}

const INITIAL_STATE: IStateProps = {
	questions: [],
};

interface IActionMap {
	[actionType: string]: (state: IStateProps, action?: Action<any>) => IStateProps;
}

const ACTION_MAP: IActionMap = {
	[RejectionActions.addQuestion.type]: addQuestion,
	[RejectionActions.removeQuestion.type]: removeQuestion,
}

const reducer = (state = INITIAL_STATE, action: Action<any>): IStateProps => {
	return ACTION_MAP[action.type]?.(state, action) || state;
};

function addQuestion(
	state: IStateProps,
	{ payload: newQuestion }
): IStateProps {
	const { questions: oldQuestions } = state;
	const questions = [...oldQuestions, newQuestion];

	return {
		...state,
		questions,
	};
}

function removeQuestion(state: IStateProps, { payload: id }): IStateProps {
	const { questions } = state;

	return {
		...state,
		questions: questions.filter((question) => question.id !== id),
	};
}

export default reducer;
