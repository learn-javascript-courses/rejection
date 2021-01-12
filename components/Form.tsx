import { ChangeEvent, useState } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { RejectionActions } from "../store/RejectionActions";
import { IQuestion, QuestionStatus, Variant } from "../types/Rejection";
import { generateRandomId } from "../utils";
import Button from "./Button";

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
				<input
					placeholder="Askee"
					value={askee}
					onChange={handleAskeeChange}
				/>
			</div>
			<div className="row">
				<input
					placeholder="Question"
					value={question}
					onChange={handleQuestionChange}
				/>
			</div>
			<div className="row">
				<Button
					variant={Variant.PRIMARY}
					onClick={() => addQuestion(QuestionStatus.ACCEPTED)}
				>
					{QuestionStatus.ACCEPTED}
				</Button>
				<Button
					variant={Variant.DANGER}
					onClick={() => addQuestion(QuestionStatus.REJECTED)}
				>
					{QuestionStatus.REJECTED}
				</Button>
				<Button
					variant={Variant.NORMAL}
					onClick={() => addQuestion(QuestionStatus.UNANSWERED)}
				>
					{QuestionStatus.UNANSWERED}
				</Button>
			</div>

			<style jsx>{`
				.row {
					display: inline-flex;
					flex-direction: row;
					justify-content: space-between;
					width: 100%;
				}
				input {
					width: 100%;
				}
			`}</style>
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
