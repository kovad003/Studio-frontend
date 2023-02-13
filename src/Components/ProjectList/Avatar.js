import React from "react";
import styled from "styled-components";

const Avatar = ({ owner }) => {
	const { firstName, lastName } = owner;
	const letter = firstName[0] + lastName[0];
	return <StyledAvatar>{letter}</StyledAvatar>;
};

const StyledAvatar = styled.div`
	width: 36px;
	height: 36px;
	border-radius: 100%;
	background-color: #feb304;
	color: #fff;
	margin-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
`;

export default Avatar;
