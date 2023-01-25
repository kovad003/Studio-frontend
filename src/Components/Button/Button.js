import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, action, variant }) => {
	if (variant === "transparent") {
		return (
			<StyledTransparentButton onClick={action}>
				{children}
			</StyledTransparentButton>
		);
	}

	return <StyledButton onClick={action}>{children}</StyledButton>;
};

const buttonCommonStyles = css`
	width: 100%;
	border-radius: 10px;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	height: 44px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
`;

const StyledButton = styled.button`
	${buttonCommonStyles}
	background-color: ${(props) => props.theme.primaryColor};
	border: 1px solid ${(props) => props.theme.primaryColor};

	:hover {
		background-color: ${(props) => props.theme.btnHover};
	}
	:active {
		background-color: ${(props) => props.theme.btnFocus};
	}
`;

const StyledTransparentButton = styled.button`
	${buttonCommonStyles}
	background-color: transparent;
	border: 1px solid ${(props) => props.theme.white};
`;

export default Button;
