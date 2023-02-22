import React, { useState } from "react";
import styled from "styled-components";
import CommentCard from "./CommentCard";
import Button from "../../Button/Button";

// TODO: replace this static values with actual values that getting from props
const date = new Date();
const comments = [
	{
		name: "Jane Doe",
		username: "jane123",
		userImageUrl:
			"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
		commentText: "Great post!",
		createdAt: "2023-02-25T12:00:00Z",
		project: "Adidas clothes",
	},
	{
		name: "John Smith",
		username: "john456",
		userImageUrl:
			"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
		commentText: "I completely agree!",
		createdAt: "2023-01-25T13:00:00Z",
		project: "Nike Air shoes",
	},
	{
		name: "Amy Johnson",
		username: "amy789",
		userImageUrl:
			"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
		commentText: "Thanks for sharing!",
		createdAt: "2023-01-25T14:00:00Z",
		project: "Pull & Bear t-shitrs",
	},
];

const CommentArea = (props) => {
	const [commentState, setCommentState] = useState(comments);

	return (
		<StyledCommentArea>
			<div className="comment-area">
				<div className="comment-title">
					<div className="comment-title-shape"></div>
					<h3 className="comment-title-text">Comments</h3>
				</div>
				<div className="comment-area-container">
					{commentState.map((comment, i) => (
						<CommentCard key={i} comment={comment} />
					))}
				</div>
				<div className="comment-view-btn-container">
					<Button className="comment-view-all-button">View All</Button>
				</div>
			</div>
		</StyledCommentArea>
	);
};

const StyledCommentArea = styled.section`
	background-color: ${(props) => props.theme.white};
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	width: 100%;
	border: ${(props) => props.theme.borderColor};
	border-radius: 10px;
	margin-bottom: 1em;
	height: 70%;
	padding: 0 10px;
	overflow-y: auto;
	flex: 1;

	.comment-area {
		width: 100%;
		height: 100%;
		position: relative;

		.comment-view-btn-container {
			position: absolute;
			bottom: 0;
			width: 100%;
			background-color: #fff;
			padding: 10px 20px;
		}
	}
	.comment-title {
		display: flex;
		justify-content: start;
		align-items: center;
		position: sticky;
		top: 0;
		padding: 10px 0;
		background-color: #fff;
	}
	.comment-title-text {
		font-size: 20px;
		font-weight: 600;
		line-height: 32px;
		letter-spacing: -0.02em;
		text-align: left;
		padding-left: 10px;
	}

	.comment-title-shape {
		width: 16px;
		height: 32px;
		background-color: #ffd88d;
		border-radius: 4px;
	}
`;

export default CommentArea;
