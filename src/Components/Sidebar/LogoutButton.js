import React from "react";
import { FiLogOut } from "react-icons/fi";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const LogoutButton = () => {
	const { removeFromLocalStorage, setAuth } = useAuth();
	const navigate = useNavigate();

	const handleOnClick = () => {
		removeFromLocalStorage();
		setAuth({});
		navigate("/");
		toast.success("Successfully logged out");
	};

	return (
		<StyledLogoutButton onClick={handleOnClick}>
			<FiLogOut size={20} /> Logout
		</StyledLogoutButton>
	);
};

const StyledLogoutButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.dangerBg};
	font-weight: 600;
	height: 60px;
	cursor: pointer;

	svg {
		margin-right: 10px;
	}
`;

export default LogoutButton;
