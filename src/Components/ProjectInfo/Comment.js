import React from "react";
import styled from "styled-components";
import moment from "moment";

const Comment = ({ comment }) => {
	const { body, createdAt, firstName } = comment;
	const date = moment(moment.utc(createdAt).toDate())
		.local()
		.format("YYYY-MM-DD HH:mm:ss");

	return (
		<StyledComment>
			<section className="comment-header">
				<div className="comment--user-name">{firstName}</div>
				<div className="comment-createdAt">
					{moment(date).startOf("second").fromNow()}
				</div>
			</section>
			<section className="comment-body">{body}</section>
		</StyledComment>
	);
};

const StyledComment = styled.div`
	border: 1px solid ${(props) => props.theme.borderColor};
	padding: 6px 20px;
	margin-bottom: 10px;
	border-radius: 10px;
	background-color: ${(props) => props.theme.inputFocusBg};

	.comment-header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.comment--user-name {
			font-size: 15px;
			font-weight: bold;
		}

		.comment-createdAt {
			font-size: 12px;
			font-weight: 400;
			color: gray;
		}
	}
	.comment-body {
		font-size: 14px;
		font-weight: 300;
	}
`;

export default Comment;
