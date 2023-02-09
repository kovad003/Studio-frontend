import React, { useState, useEffect } from 'react';
import styled from "styled-components";



const TimeDifference = (props) => {

  const commentDate = new Date(props.commentDate);
  const [timeSince, setTimeSince] = useState();

  const getTimeSince = (date)=> {
    const currentDate = new Date();
    const difference = currentDate - date;
    const oneMinute = 1000 * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneWeek = oneDay * 7;
  
    if (difference < oneMinute) {
      return "1 m";
    } else if (difference < oneHour) {
      return `${Math.floor(difference / oneMinute)} m`;
    } else if (difference < oneDay) {
      return `${Math.floor(difference / oneHour)} h`;
    } else if (difference < oneWeek) {
      return `${Math.floor(difference / oneDay)} d`;
    } else {
      return `${Math.floor(difference / oneWeek)} w`;
    }
  }

  useEffect(() => {
    setTimeSince(getTimeSince(commentDate));
  }, []);

  return (
    <StyledTimeDifference>
      <p>{timeSince}</p>
    </StyledTimeDifference>

  );
};

const StyledTimeDifference = styled.section`
padding
  color: grey;
  font-size: 10px;

`;

export default TimeDifference;