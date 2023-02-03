import React from "react";
import styled from "styled-components";

const PageContainer = ({ children }) => {
	return <StyledPageContainer>{children}</StyledPageContainer>;
};

const StyledPageContainer = styled.section`
	width: 100%;
	height: 100%;
	padding: 20px;
	position: relative;

	h1.page-title {
		font-size: 32px;
		margin-bottom: 20px;
		margin-top: 6px;
	}
`;

export default PageContainer;
