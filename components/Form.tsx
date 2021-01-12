import { ChangeEvent, useState } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { RejectionActions } from "../store/RejectionActions";
import { IQuestion, QuestionStatus } from "../types/Rejection";
import { generateRandomId } from "../utils";

interface IDispatchProps {
	askQuestion: (question: IQuestion) => void;
}

type IProps = IDispatchProps;

const Form: React.FC<IProps> = ({ askQuestion }) => {
	const [askee, setAskee] = useState("");
	const [question, setQuestion] = useState("");

	const handleAskeeChange = (ev: ChangeEvent<HTMLInputElement>): void => {
		setAskee(ev.target.value);
	};

	const handleQuestionChange = (ev: ChangeEvent<HTMLInputElement>): void => {
		setQuestion(ev.target.value);
	};

	const addQuestion = (status: QuestionStatus): void => {
		if (question && askee) {
			const newQuestion = {
				id: generateRandomId(),
				timestamp: Date.now(),
				question,
				askee,
				status,
			};
			askQuestion(newQuestion);
		}
	};

	return (
		<div className="form">
			<div className="row">
				<label htmlFor="askee">Name</label>
				<input
					id="askee"
					placeholder="Askee"
					value={askee}
					onChange={handleAskeeChange}
				/>
			</div>
			<div className="row">
				<label htmlFor="question">Question</label>
				<input
					id="question"
					placeholder="Question"
					value={question}
					onChange={handleQuestionChange}
				/>
			</div>
			<div className="row">
				<button
					className="button button-handler"
					onClick={() => addQuestion(QuestionStatus.ACCEPTED)}
				>
					Accepted
				</button>
				<button
					className="button button-handler"
					onClick={() => addQuestion(QuestionStatus.REJECTED)}
				>
					Rejected
				</button>
				<button
					className="button button-handler"
					onClick={() => addQuestion(QuestionStatus.UNANSWERED)}
				>
					Unanswered
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (
	dispatch
) => {
	return {
		askQuestion: (question: IQuestion) =>
			dispatch(RejectionActions.addQuestion(question)),
	};
};

export default connect(null, mapDispatchToProps)(Form);
