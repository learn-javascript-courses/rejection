import { MouseEvent } from "react";
import { Variant } from "../types/Rejection";
import { getStyleObj, getStyleStr } from "../utils";

interface IOwnProps {
	variant: Variant;
	style?: object;

	onClick: (ev: MouseEvent<HTMLButtonElement>) => void;
}

type IProps = IOwnProps;

const Button: React.FC<IProps> = ({ variant, style, onClick, children }) => {
	const buttonStyle = { ...style, ...getStyleObj(variant) };

	return (
		<>
			<button onClick={onClick}>{children}</button>
			<style jsx>{`
				button {
					min-width: 30%;
					color: #333;
					font-weight: bold;
					outline: none;
					${getStyleStr(buttonStyle)}
				}
			`}</style>
		</>
	);
};

export default Button;
