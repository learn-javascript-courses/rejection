import { actionCreatorFactory } from "typescript-fsa";
import { IQuestion } from "../types/Rejection";

const actionCreator = actionCreatorFactory("REJECTION");

export namespace RejectionActions {
	export const addQuestion = actionCreator<IQuestion>("ADD_QUESTION");

	export const removeQuestion = actionCreator<string>("REMOVE_QUESTION");
}
