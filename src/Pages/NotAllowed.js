import React from "react";
import styled from "styled-components";
import notAllowed from "../assets/notAllowed.svg";
import { useLocation } from "react-router";
import { Button } from "../Components";
import useAuth from "../hooks/useAuth";

const NotAllowed = () => {
	const location = useLocation();
	const { auth } = useAuth();

	return (
		<StyledNotAllowed>
			<img src={notAllowed} alt="not-allowed" />
			<h2>You are unauthorized</h2>
			<Button
				variant="link"
				type="short"
				to={
					auth?.user?.roles === "Admin" || auth?.users?.roles === "Assistant"
						? "/dashboard"
						: "/client/projects"
				}
			>
				Back to bussiness
			</Button>
		</StyledNotAllowed>
	);
};

const StyledNotAllowed = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	h2 {
		margin-bottom: 20px;
	}

	img {
		width: 30%;
	}
`;

export default NotAllowed;
