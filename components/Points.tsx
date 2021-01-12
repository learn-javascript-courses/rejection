import { connect, MapStateToProps } from "react-redux";
import { IStateProps } from "../store/RejectionReducers";
import { RejectionSelectors } from "../store/RejectionSelectors";

interface IOwnProps {
	points: number;
}

type IProps = IOwnProps;

const Points: React.FC<IProps> = ({ points }) => {
	return <h2>{`Point${points !== 1 ? "s" : ""}: ${points}`}</h2>;
};

const mapStateToProps: MapStateToProps<IOwnProps, {}, IStateProps> = (state) => {
	return {
		points: RejectionSelectors.points(state),
	};
};

export default connect(mapStateToProps)(Points);
