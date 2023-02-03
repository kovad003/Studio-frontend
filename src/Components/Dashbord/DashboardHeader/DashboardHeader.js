import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";
import { AiOutlineSearch } from "react-icons/ai";

const DashboardHeader = ({ keyword, setKeyword }) => {
	return (
		<StyledDashboardHeader>
			<div className="DashboardHeader__outer">
				<div className="DashboardHeader__left">
					<div className="DashboardHeader__inner">
						<input
							className="DashboardHeader__search"
							key="userSearch"
							value={keyword}
							placeholder={"Search..."}
							onChange={(e) => setKeyword(e.target.value)}
						/>

						<span className="DashboardHeader__icon">
							<AiOutlineSearch size={18} />
						</span>
					</div>
				</div>

				<div className="DashboardHeader__right">
					<div className="DashboardHeader__btn">
						<Button className="DashboardHeader__btn">Add User</Button>
					</div>
				</div>
			</div>
		</StyledDashboardHeader>
	);
};

const StyledDashboardHeader = styled.section`
	background-color: ${(props) => props.theme.white};
	/* border-bottom: 1px solid ${(props) => props.theme.sidebarBtnColor}; */

	border-bottom: 0.1px solid ${(props) => props.theme.borderColor};
	font-size: 18px;
	height: 60px;

	.DashboardHeader__outer {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.DashboardHeader__left {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;

			.DashboardHeader__inner {
				border-radius: 25px;
				width: 374px;
				height: 35px;
				margin: 13px 0px 12px;
				position: relative;

				.DashboardHeader__search {
					width: 100%;
					height: 100%;
					border-radius: 50px;
					border: none;
					outline: none;
					padding-left: 8px;
					padding-right: 50px;
					border: none;
					background-color: ${(props) => props.theme.bgColor};
				}

				.DashboardHeader__icon {
					float: right;
					padding: 7px 14px 9px 0px;
					color: ${(props) => props.theme.sidebarBtnColor};
					position: absolute;
					top: 50%;
					right: 10px;
					transform: translateY(-50%);
				}
			}
		}
	}

	.DashboardHeader__btn {
		width: 120px;
		height: 40px;
	}

	.DashboardHeader__right {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		padding: 0 10px;
	}

	// Media Query for a responsive design on devices of 850px width or less
	@media (max-width: 850px) {
		overflow: hidden;

		.DashboardHeader__left {
			width: 50%;
		}

		.DashboardHeader__inner {
			width: 120px;
			justify-content: center;
			padding: 0px;
		}

		.DashboardHeader__search {
			width: 100px;
			padding-left: 1px;
			position: relative;
			right: 14px;
		}

		.DashboardHeader__icon {
			visibility: hidden;
		}

		.DashboardHeader__right {
			width: 50%;
		}

		.DashboardHeader__btn {
			margin: 7px 0.5px 10px 0.5px;
		}
	}
`;

export default DashboardHeader;
