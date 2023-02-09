import React from "react";
import Form from "../Form";
import InputWrapper from "../Input/InputWrapper";
import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const CreateUserPage = () => {
  const [client, setClient] = useState({ value: "", isError: false });
  const [email, setEmail] = useState({ value: "", isError: false });
  const [phone, setPhone] = useState({ value: "", isError: false });
  const [contactPerson, setContactPerson] = useState({
    value: "",
    isError: false,
  });
  const onChangeHandler = () => {};

  const handleFormSubmit = (e) => {
    alert("Form submited!");
    e.preventDefault();
  };

  return (
    <StyledCreateUserPage>
      <Form width="545px" height="100%">
        <h3 className="CreateUserPage__title">Create User</h3>
        <InputWrapper
          id="contactPerson"
          name="contactPerson"
          action={onChangeHandler}
          value={contactPerson}
          placeholder="Contact person name"
          type="text"
        />
        <InputWrapper
          id="email"
          name="email"
          action={onChangeHandler}
          value={email}
          placeholder="Contact email address"
          type="text"
        />
        <InputWrapper
          id="phone"
          name="phone"
          action={onChangeHandler}
          value={phone}
          placeholder="Contact phone number"
          type="text" // Could be a number, yet perhaps text is better for the (+) symbol with international format
        />
        <InputWrapper
          id="client"
          name="client"
          action={onChangeHandler}
          value={client}
          placeholder="Company name"
          type="text"
        />
        <div className="CreateUserPage__btn">
          <Button action={handleFormSubmit}>Add User</Button>
        </div>
      </Form>
    </StyledCreateUserPage>
  );
};

const StyledCreateUserPage = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.white};
  border-radius: 12px;
  justify-content: center;
  padding: 0px 0px 40px;

  .CreateUserPage__title {
    position: relative;
    top: 15px;
    right: 1px;
  }

  .CreateUserPage__btn {
    margin-top: 30px;
  }
`;

export default CreateUserPage;
