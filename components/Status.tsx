import { faMinus, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Variant } from "../types/Rejection";
import { getStyleObj, getStyleStr } from "../utils";

interface IOwnProps {
	variant: Variant;
	style?: object;
}

type IProps = IOwnProps;

const iconMap = {
	[Variant.PRIMARY]: faCheck,
	[Variant.DANGER]: faTimes,
	[Variant.NORMAL]: faMinus,
};

const Status: React.FC<IProps> = ({ variant, style }) => {
	const iconStyle = { ...style, ...getStyleObj(variant) };
	const icon = iconMap[variant] || faMinus;

	return (
		<div>
			<FontAwesomeIcon icon={icon} />
			<style jsx>{`
				div {
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 100%;
					width: 2rem;
					height: 2rem;
					margin: auto;
					${getStyleStr(iconStyle)}
				}
			`}</style>
		</div>
	);
};

export default Status;
