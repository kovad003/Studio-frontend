import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Button = ({ children, action, variant, to, type }) => {
	if (variant === "transparent") {
		return (
			<StyledTransparentButton onClick={action}>
				{children}
			</StyledTransparentButton>
		);
	}

	if (variant === "link" && type === "short") {
		return <StyledShortLinkButton to={to}>{children}</StyledShortLinkButton>;
	}

	if (variant === "link") {
		return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
	}

	return <StyledButton onClick={action}>{children}</StyledButton>;
};

const buttonCommonStyles = css`
	width: 100%;
	border-radius: 10px;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	height: 42px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
`;

const StyledLinkButton = styled(Link)`
	${buttonCommonStyles}
	background-color: ${(props) => props.theme.primaryColor};
	border: 1px solid ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.white};

	:hover {
		background-color: ${(props) => props.theme.btnHover};
	}
	:active {
		background-color: ${(props) => props.theme.btnFocus};
	}
`;

const StyledShortLinkButton = styled(Link)`
	${buttonCommonStyles}
	background-color: ${(props) => props.theme.primaryColor};
	border: 1px solid ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.white};
	max-width: 200px;

	:hover {
		background-color: ${(props) => props.theme.btnHover};
	}
	:active {
		background-color: ${(props) => props.theme.btnFocus};
	}
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
