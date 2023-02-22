import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { MdOutlineInsertComment } from "react-icons/md";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import Comment from "./Comment";

const CommentSection = ({ comments, connection, projectId }) => {
	const [comment, setComment] = React.useState("");
	const { auth } = useAuth();

	const handleAddComment = async () => {
		if (!comment) {
			toast.error("Please add a comment");
		} else {
			if (connection) {
				try {
					const message = {
						Body: comment,
						AuthorId: auth?.user?.id,
						ProjectId: projectId,
					};
					await connection.invoke("SendComment", message);
					setComment("");
				} catch (error) {
					console.log(error);
					toast.error("A problem accured while sending the comment");
				}
			}
		}
	};

	return (
		<StyledCommentSection className="project-comments">
			{comments.length > 0 ? (
				comments.map((comment) => {
					return <Comment key={comment.id} comment={comment} />;
				})
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
			<Button action={handleAddComment}>Add Comment</Button>
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
