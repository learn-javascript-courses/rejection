import { ReactNode } from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { RejectionActions } from "../store/RejectionActions";
import { IStateProps } from "../store/RejectionReducers";
import { RejectionSelectors } from "../store/RejectionSelectors";
import { IQuestion } from "../types/Rejection";
import { datetimeFormatter } from "../utils";

const generateTable = (
	questions: IQuestion[],
	removeQuestion: (id: string) => void
): ReactNode =>
	questions.map(({ id, askee, question, timestamp, status }, index) => (
		<tr key={id}>
			<td>
				<b>{index + 1}</b>
			</td>
			<td>{askee}</td>
			<td>{question}</td>
			<td>{datetimeFormatter(new Date(timestamp))}</td>
			<td>{status}</td>
			<td>
				<button onClick={() => removeQuestion(id)}>Remove</button>
			</td>
		</tr>
	));

interface IOwnProps {
	questions: IQuestion[];
}

interface IDispatchProps {
	removeQuestion: (id: string) => void;
}

type IProps = IOwnProps & IDispatchProps;

const Questions: React.FC<IProps> = ({ questions, removeQuestion }) => {
	return questions.length ? (
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
	) : (
		<div>No data!</div>
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
