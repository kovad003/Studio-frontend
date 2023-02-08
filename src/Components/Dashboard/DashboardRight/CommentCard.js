import React, { useState } from "react";
import styled from "styled-components";


const CommentCard = (props) => {
  return (
    <StyledCommentCard>
    <div className="comment-card-container">
        <div key={props.comment.username}>
          <h5>{props.comment.name} (@{props.comment.username})</h5>
          <img src={props.comment.userImageUrl} alt={props.comment.name} />
          <p>{props.comment.commentText}</p>
          <p>{props.comment.createdAt}</p>
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
	min-height: 100px;
  margin-botton: 5px;
`;

export default CommentCard;
