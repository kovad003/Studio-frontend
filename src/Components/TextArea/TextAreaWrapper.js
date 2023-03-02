import React from "react";
import styled from "styled-components";
import TextArea from "./TextArea";

const TextAreaWrapper = (props) => {
	return (
		<StyledTextAreaWrapper>
			<TextArea {...props} />
			{props.placeholder && (
				<span className="placeholder">{props.placeholder}</span>
			)}
		</StyledTextAreaWrapper>
	);
};

const StyledTextAreaWrapper = styled.div`
	width: 100%;
	position: relative;
	margin-top: 40px;

	.placeholder {
		position: absolute;
		top: 50%;
		left: 20px;
		transform: translateY(-50%);
		color: ${(props) => props.theme.inputBorder};
		pointer-events: none;
		transition: all 0.3s ease;
	}

	textarea:focus + .placeholder {
		top: -15px;
		left: 0;
		font-size: 14px;
		color: ${(props) => props.theme.primaryColor};
	}

	textarea.full + .placeholder {
		top: -15px;
		left: 0;
		font-size: 14px;
		color: ${(props) => props.theme.primaryColor};
	}
`;

export default TextAreaWrapper;
