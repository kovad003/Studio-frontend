import React from "react";
import Form from "../Form";
import InputWrapper from "../Input/InputWrapper";
import { useState } from "react";

const CreateUserPage = () => {
  const [client, setClient] = useState({ value: "", isError: false });
  const [email, setEmail] = useState({ value: "", isError: false });
  const [phone, setPhone] = useState({ value: "", isError: false });
  const [contactPerson, setContactPerson] = useState({
    value: "",
    isError: false,
  });
  const onChangeHandler = () => {};

  return (
    <div>
      <Form>
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
      </Form>
    </div>
  );
};

export default CreateUserPage;
