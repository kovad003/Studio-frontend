import React, { useState } from "react";
import styled from "styled-components";
import CommentCard from "./CommentCard";

// TODO: replace this static values with actual values that getting from props
const comments = [
  {
    name: "Jane Doe",
    username: "jane123",
    userImageUrl: "https://example.com/jane-profile.jpg",
    commentText: "Great post!",
    createdAt: "2022-12-25T12:00:00Z",
  },
  {
    name: "John Smith",
    username: "john456",
    userImageUrl: "https://example.com/john-profile.jpg",
    commentText: "I completely agree!",
    createdAt: "2022-12-25T13:00:00Z",
  },
  {
    name: "Amy Johnson",
    username: "amy789",
    userImageUrl: "https://example.com/john-profile.jpg",
    commentText: "Thanks for sharing!",
    createdAt: "2022-12-25T14:00:00Z",
  },
];

const CommentArea = props => {
  const [commentState, setCommentState] = useState(comments);

  return (
    <StyledCommentArea>
      <h3 className="comment-title">Comments</h3>
      <div className="comment-area-container">
        {commentState.map(comment => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </StyledCommentArea>
  );
};

const StyledCommentArea = styled.section`
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
	border: ${(props) => props.theme.borderColor};
	border-radius: 10px;
  margin-bottom: 1em;
  height: 70%;
  
  .comment-title {
    padding: 10px;
    margin-botton: 10px;
  
  }
`;

export default CommentArea;
