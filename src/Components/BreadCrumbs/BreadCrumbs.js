import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const BreadCrumbs = () => {
	const location = useLocation();
	let currentLink = "";

	const crumbs = location.pathname
		.split("/")
		.filter((crumb) => crumb !== "")
		.map((crumb) => {
			currentLink += `/${crumb}`;
			return <Link to={currentLink}>{crumb}</Link>;
		});

	return (
		<StyledBreadrumbs>
			{crumbs.map((crumb, i) => {
				return (
					<span>
						{crumb} {crumbs.length - 1 !== i ? "❯ " : ""}
					</span>
				);
			})}
		</StyledBreadrumbs>
	);
};

const StyledBreadrumbs = styled.div`
	font-size: 14px;
	color: ${(props) => props.theme.lightInfoIcon};
	transition: all 0.3s ease;
	position: absolute;
	top: 6px;
	text-transform: capitalize;

	a {
		color: ${(props) => props.theme.lightInfoIcon};

		:hover {
			color: ${(props) => props.theme.primaryColor};
		}
	}
`;

export default BreadCrumbs;
