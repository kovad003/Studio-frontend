import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Logo from "../Logo";
import LogoutButton from "../Sidebar/LogoutButton";

const UserDashboardHeader = () => {
	const handleButtonClick = () => {};

	return (
		<StyledUserDashboardHeader>
			<Logo />
			<div className="userdashboard--header">
				<div className="userdashboard--header--btn">
					<Button action={handleButtonClick}>Add Project</Button>
				</div>
				<LogoutButton />
			</div>
		</StyledUserDashboardHeader>
	);
};

const StyledUserDashboardHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px 0 0;
	height: 60px;

	.userdashboard--header {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.userdashboard--header--btn {
		width: 200px;
	}
`;

export default UserDashboardHeader;
