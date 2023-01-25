import React from "react";
import styled from "styled-components";

const Input = ({ id, name, action, value, type }) => {
	return (
		<StyledInput
			id={id}
			name={name}
			onChange={action}
			value={value.value}
			type={type}
		/>
	);
};

const StyledInput = styled.input`
	width: 100%;
	height: 45px;
	border: 1px solid ${(props) => props.theme.inputBorder};
	border-radius: 10px;
	padding: 0 20px;
	transition: all 0.3s ease;

	:hover {
		border-color: ${(props) => props.theme.btnHover};
	}

	:focus {
		border-color: ${(props) => props.theme.primaryColor};
		outline: none;
		box-shadow: 0 0 0 4px ${(props) => props.theme.lightBtnBg};
		background-color: ${(props) => props.theme.inputFocusBg};
	}
`;

export default Input;
