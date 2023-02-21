import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { MdOutlineInsertComment } from "react-icons/md";

const CommentSection = ({ project }) => {
	const [comment, setComment] = React.useState("");

	return (
		<StyledCommentSection className="project-comments">
			{project.comments.length > 0 ? (
				"Comments"
			) : (
				<div className="no-content">
					<MdOutlineInsertComment size={30} />
					<span>No comment to show</span>
				</div>
			)}
			<textarea
				name="comment"
				placeholder="Add a comment"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			></textarea>
			<Button>Add Comment</Button>
		</StyledCommentSection>
	);
};

const StyledCommentSection = styled.section`
	textarea {
		width: 100%;
		min-height: 100px;
		border: 1px solid ${(props) => props.theme.borderColor};
		border-radius: 10px;
		background-color: #f6f6f6;
		padding: 10px;
		resize: none;
		font-size: 14px;
		font-family: "Lexend", sans-serif;
		margin-top: 10px;
		color: #858585;
		margin-bottom: 10px;
		transition: all 0.3s ease;

		:hover {
			border-color: ${(props) => props.theme.btnHover};
		}

		:focus {
			border-color: ${(props) => props.theme.primaryColor};
			outline: none;
			box-shadow: 0 0 0 4px ${(props) => props.theme.lightBtnBg};
			background-color: ${(props) => props.theme.inputFocusBg};
		}

		::placeholder {
			font-family: "Lexend", sans-serif;
			color: #858585;
		}
	}
`;

export default CommentSection;
