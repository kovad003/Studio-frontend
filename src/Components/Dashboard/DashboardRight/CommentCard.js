import React from "react";
import styled from "styled-components";
import TimeDifference from '../../utils/TimeDifference'


const CommentCard = (props) => {

  return (
    <StyledCommentCard>
      <div className="comment-card-container">
        <div key={props.comment.username}>
          <div className="time-difference">
            <TimeDifference commentDate={props.comment.createdAt} />
          </div>
          <div className="comment-user-details">
            <div className="comment-user-details-img">
              <img src={props.comment.userImageUrl} alt={props.comment.name} className="comment-avatar-image"/>
            </div>
            <div className="comment-user-details-text">
              <h5>{props.comment.name}</h5>
              <h6>(@{props.comment.username})</h6>
            </div>
          </div>
          <div className="contents">
            <p>on {props.comment.project}</p>
            <p>{props.comment.commentText}</p>
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
	min-height: 100px;
  margin-botton: 5px;
  height: 165px;

  .time-difference{
    display:flex;
    justify-content: end;
    align-item:start;
  }
  .comment-avatar-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;

  }
  .comment-user-details {
    display:flex;
    flex-direction:row;
    justify-content:start;
    height:50px;
  }
  .comment-user-details-text {
    padding: 5px 5px;
  }
  .comment-user-details-img {
    padding: 5px 10px;
  }
`;

export default CommentCard;
