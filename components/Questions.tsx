import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { RejectionActions } from "../store/RejectionActions";
import { IStateProps } from "../store/RejectionReducers";
import { RejectionSelectors } from "../store/RejectionSelectors";
import { IQuestion, QuestionStatus, Variant } from "../types/Rejection";
import { datetimeFormatter } from "../utils";
import Button from "./Button";
import Status from "./Status";

const variantMap = {
	[QuestionStatus.ACCEPTED]: Variant.PRIMARY,
	[QuestionStatus.REJECTED]: Variant.DANGER,
	[QuestionStatus.UNANSWERED]: Variant.NORMAL,
};

const generateTable = (
	questions: IQuestion[],
	removeQuestion: (id: string) => void
): ReactNode => {
	if (!questions.length) {
		return (
			<tr>
				<td colSpan={6}>
					<div>No data!</div>
				</td>
			</tr>
		);
	}
	return questions.map(
		({ id, askee, question, timestamp, status }, index) => (
			<tr key={id}>
				<td>
					<b>{index + 1}</b>
				</td>
				<td>{askee}</td>
				<td>{question}</td>
				<td>{datetimeFormatter(new Date(timestamp))}</td>
				<td>
					<Status variant={variantMap[status]} />
				</td>
				<td>
					<Button
						style={{
							width: "80%",
						}}
						variant={Variant.DANGER}
						onClick={() => removeQuestion(id)}
					>
						<FontAwesomeIcon icon={faTrashAlt} />
					</Button>
				</td>
			</tr>
		)
	);
};

interface IOwnProps {
	questions: IQuestion[];
}

interface IDispatchProps {
	removeQuestion: (id: string) => void;
}

type IProps = IOwnProps & IDispatchProps;

const Questions: React.FC<IProps> = ({ questions, removeQuestion }) => {
	return (
		<>
			<div id="data-table">
				<table>
					<thead>
						<tr>
							<th>&#35;</th>
							<th>Askee</th>
							<th>Question</th>
							<th>Timestampt</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>{generateTable(questions, removeQuestion)}</tbody>
				</table>
			</div>

			<style jsx>{`
				table {
					width: 100%;
				}
			`}</style>
		</>
	);
};

const mapStateToProps: MapStateToProps<IOwnProps, {}, IStateProps> = (
	state
) => {
	return {
		questions: RejectionSelectors.questions(state),
	};
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (
	dispatch
) => {
	return {
		removeQuestion: (id) => dispatch(RejectionActions.removeQuestion(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
