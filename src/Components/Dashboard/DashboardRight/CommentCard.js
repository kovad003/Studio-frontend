import React from "react";
import styled from "styled-components";
import TimeDifference from "../../utils/TimeDifference";

const CommentCard = (props) => {
	return (
		<StyledCommentCard>
			<div className="comment-card-container">
				<div className="comment-user-details-img">
					<img
						src={props.comment.userImageUrl}
						alt={props.comment.name}
						className="comment-avatar-image"
					/>
				</div>
				<div key={props.comment.username} className="content-container">
					<div className="comment-header">
						<div className="time-difference">
							<TimeDifference commentDate={props.comment.createdAt} />
						</div>
						<div className="comment-user-details">
							<div className="comment-user-details-text">
								<h5>{props.comment.name}</h5>
							</div>
						</div>
					</div>
					<div className="contents">
						<p className="content-header">
							{" "}
							<span>on</span> {props.comment.project}
						</p>
						<p className="contents-body">{props.comment.commentText}</p>
					</div>
				</div>
			</div>
		</StyledCommentCard>
	);
};

const StyledCommentCard = styled.section`
	background-color: ${(props) => props.theme.white};
	border-radius: 5px;
	border-top: 1px solid ${(props) => props.theme.borderColor};
	padding: 10px;
	width: 100%;
	margin-bottom: 5px;

	.content-container {
		flex: 1;
	}

	.comment-card-container {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.comment-header {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
	}

	.time-difference {
		display: flex;
		justify-content: end;
		align-items: start;
		color: gray;
	}
	.comment-avatar-image {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.comment-user-details {
		display: flex;
		flex-direction: row;
		justify-content: start;
	}
	.comment-user-details-text {
		padding: 5px 0;
	}
	.comment-user-details-img {
		padding: 5px 10px;
	}

	.contents {
		font-size: 14px;
		font-weight: bold;
		flex: 1;

		.content-header {
			margin-bottom: 10px;
		}

		span {
			color: gray;
			font-weight: 300;
		}

		.contents-body {
			font-size: 15px;
			font-weight: 400;
		}
	}
`;

export default CommentCard;
