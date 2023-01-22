import React from "react";
import { StyledButton } from "./buttonStyles";

const Button = ({ children, action }) => {
	return <StyledButton onClick={action}>{children}</StyledButton>;
};

export default Button;
