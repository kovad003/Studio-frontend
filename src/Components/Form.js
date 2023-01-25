import React from "react";
import styled from "styled-components";

const Form = ({ children, width, height }) => {
	return (
		<StyledForm width={width} height={height}>
			{children}
		</StyledForm>
	);
};

const StyledForm = styled.form`
	width: ${(prosp) => prosp.width};
	height: ${(prosp) => prosp.height};
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export default Form;
