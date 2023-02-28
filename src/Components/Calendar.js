import React from "react";
import styled from "styled-components";

const getDaysInMonth = (year, month) => {
	const date = new Date(year, month, 1);
	const days = [];
	while (date.getMonth() === month) {
		days.push(1);
		date.setDate(date.getDate() + 1);
	}
	return days;
};

const Calendar = () => {
	const date = new Date();
	const today = date.getDate();
	const weekday = date.getDay();
	const days = getDaysInMonth(date.getFullYear(), date.getMonth());
	return (
		<StyledCalendar>
			{days.map((day, i) => {
				const temp = i + 1;
				return (
					<span
						key={i}
						className={`${temp === today ? "today" : ""} ${
							temp % 7 === 0 ? "sunday" : ""
						}`}
					>
						{temp}
					</span>
				);
			})}
		</StyledCalendar>
	);
};

const StyledCalendar = styled.div`
	height: 200px;
	width: 100%;
	background-color: ${(props) => props.theme.white};
	border: ${(props) => props.theme.borderColor};
	border-radius: 10px;
	padding: 20px;
	font-size: 12px;

	display: grid;
	grid-template-columns: repeat(7, 1fr);
	place-items: center;

	.today {
		background-color: ${(props) => props.theme.sidebarBtnHoverBg};
		color: ${(props) => props.theme.primaryColor};
		border-radius: 8px;
		padding: 5px;
	}
`;

export default Calendar;
