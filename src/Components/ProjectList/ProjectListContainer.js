import React from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";

const ProjectListContainer = () => {
  return (
    <StyledProjectList>
      <div className="project-list--titles">
        <span className="title-1">Client name</span>
        <span className="title-2">Project ID</span>
        <span className="title-3"> Project Name</span>
        <span className="title-4">Status</span>
        <span className="title-5">Date</span>
        <span className="title-6">Delete</span>
      </div>
      <ProjectList />
    </StyledProjectList>
  );
};

const StyledProjectList = styled.section`
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 20px;
  width: 100%;
  height: fit-content;

  .project-list--titles {
    width: 100%;
    background-color: ${(props) => props.theme.darkBgColor};
    color: ${(props) => props.theme.white};
    height: 40px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
    padding: 0 20px;

    .title-1 {
      grid-column: 1 / span 2;
    }

    .title-2 {
      grid-column: 3 / span 1;
    }

    .title-3 {
      grid-column: 4 / span 3;
    }

    .title-4 {
      grid-column: 7 / span 1;
    }

    .title-5 {
      grid-column: 8 / span 2;
    }

    .title-6 {
      grid-column: 10 / span 1;
    }

    /* 
	.title-1 {
      grid-column: 1 / span 2;
    }

    .title-3 {
      grid-column: 4 / span 4;
    }

    .title-5 {
      grid-column: 9 / span 2;
    }
	 */
  }
`;

export default ProjectListContainer;
