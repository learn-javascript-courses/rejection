import { connect, MapStateToProps } from "react-redux";
import { IStateProps } from "../store/RejectionReducers";
import { RejectionSelectors } from "../store/RejectionSelectors";

interface IOwnProps {
	points: number;
}

type IProps = IOwnProps;

const Points: React.FC<IProps> = ({ points }) => {
	return (
		<h2>
			{`Point${points !== 1 ? "s" : ""}: `}
			<span>{points}</span>

			<style jsx>{`
				h2 {
					color: #009a00;
				}
			`}</style>
		</h2>
	);
};

const mapStateToProps: MapStateToProps<IOwnProps, {}, IStateProps> = (
	state
) => {
	return {
		points: RejectionSelectors.points(state),
	};
};

export default connect(mapStateToProps)(Points);
