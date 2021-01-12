export enum QuestionStatus {
	ACCEPTED = "Accepted",
	REJECTED = "Rejected",
	UNANSWERED = "Unanswered",
}

export interface IQuestion {
	id: string;
	timestamp: number;
	question: string;
	askee: string;
	status: QuestionStatus;
}

export enum Variant {
	PRIMARY = "primary",
	DANGER = "danger",
	NORMAL = "normal",
}
