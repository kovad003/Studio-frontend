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
			className={`${value.value ? "full" : ""} ${value.error ? "error" : ""}`}
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
	font-size: 18px;

	:hover {
		border-color: ${(props) => props.theme.btnHover};
	}

	:focus {
		border-color: ${(props) => props.theme.primaryColor};
		outline: none;
		box-shadow: 0 0 0 4px ${(props) => props.theme.lightBtnBg};
		background-color: ${(props) => props.theme.inputFocusBg};
	}

	&.error {
		border: 1px solid ${(props) => props.theme.dangerBg};
	}
`;

export default Input;
