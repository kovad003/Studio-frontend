import React from "react";
import styled from "styled-components";

const TextArea = ({ id, name, action, value }) => {
  return (
    <StyledTextArea
      id={id}
      name={name}
      onChange={action}
      value={value.value}
      className={`${value.value ? "full" : ""} ${value.error ? "error" : ""}`}
    />
  );
};

const StyledTextArea = styled.textarea`
	width: 100%;
  min-height: 100px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 10px;
  padding: 6px 20px;
  resize: none;
  font-family: "Lexend", sans-serif;
  font-size: 18px;
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

	&.error {
		border: 1px solid ${(props) => props.theme.dangerBg};
	}

  ::placeholder {
    color: #858585;
    font-size: 18px;
  }
`;

export default TextArea;
