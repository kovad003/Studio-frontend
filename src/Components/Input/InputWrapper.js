import React from "react";
import Input from "./Input";
import styled from "styled-components";

const InputWrapper = (props) => {
	return (
		<StyledInputWrapper>
			<Input {...props} />
			{props.placeholder && (
				<span className="placeholder">{props.placeholder}</span>
			)}
		</StyledInputWrapper>
	);
};

const StyledInputWrapper = styled.div`
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

	input:focus + .placeholder {
		top: -15px;
		left: 0;
		font-size: 14px;
		color: ${(props) => props.theme.primaryColor};
	}

	input.full + .placeholder {
		top: -15px;
		left: 0;
		font-size: 14px;
		color: ${(props) => props.theme.primaryColor};
	}
`;

export default InputWrapper;
