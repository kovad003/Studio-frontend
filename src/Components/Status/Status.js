import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Status = ({ type }) => {
	if (type) {
		return <StyledStatusOngoing>Ongoing</StyledStatusOngoing>;
	}

	return <StyledStatus>Done</StyledStatus>;
};

const commonStyles = css`
	width: 72px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	border-radius: 6px;
`;

const StyledStatus = styled.div`
	${commonStyles}
	background-color: ${(props) => props.theme.successBg};
	color: ${(props) => props.theme.successcolor};
`;

const StyledStatusOngoing = styled.div`
	${commonStyles}
	background-color: ${(props) => props.theme.ongoindBg};
	color: ${(props) => props.theme.ongoingcolor};
`;

export default Status;
