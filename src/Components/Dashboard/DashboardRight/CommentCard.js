import React, { useState } from "react";
import styled from "styled-components";


const CommentCard = (props) => {
  return (
    <StyledCommentCard>
    <div className="comment-card-container">
        <div key={props.comment.username}>
          <h3>{props.comment.name} (@{props.comment.username})</h3>
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
	border-bottom: 1px solid ${(props) => props.theme.borderColor};
	padding: 10px;
	width: 100%;
	height: fit-content;
  margin-botton: 5px;
  height: 120px;

`;

export default CommentCard;
