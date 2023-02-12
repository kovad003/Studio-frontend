import React from "react";
import Form from "../Form";
import InputWrapper from "../Input/InputWrapper";
import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const initialState = {
	name: { value: "", isError: false },
	lastname: { value: "", isError: false },
	email: { value: "", isError: false },
	phone: { value: "", isError: false },
	company: { value: "", isError: false },
};

const CreateUserPage = () => {
	const [state, setState] = useState(initialState);
	const { auth } = useAuth();
	const navigate = useNavigate();

	const onChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		const newState = { ...state, [name]: { value, isError: false } };
		setState(newState);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const newObj = {
			firstName: state.name.value,
			lastname: state.lastname.value,
			email: state.email.value,
			phoneNumber: state.phone.value,
			company: state.company.value,
			password: "Pa$$W0rd",
			role: "Client",
		};

		try {
			const result = await axios.post(
				"/api/useraccount/register-client",
				JSON.stringify(newObj),
				{
					headers: {
						Authorization: `Bearer ${auth.accessToken}`,
					},
				}
			);
			toast.success("User added successfully");
			navigate("/dashboard/users");
		} catch (error) {
			console.log(error.message);
			toast.error("Something went wrong");
		}
	};

	return (
		<StyledCreateUserPage>
			<Form width="545px" height="100%">
				<h3 className="CreateUserPage__title">Create User</h3>
				<InputWrapper
					id="name"
					name="name"
					action={onChangeHandler}
					value={state.name}
					placeholder="Contact person name"
					type="text"
				/>
				<InputWrapper
					id="lastname"
					name="lastname"
					action={onChangeHandler}
					value={state.lastname}
					placeholder="Contact person lastname"
					type="text"
				/>
				<InputWrapper
					id="email"
					name="email"
					action={onChangeHandler}
					value={state.email}
					placeholder="Contact email address"
					type="text"
				/>
				<InputWrapper
					id="phone"
					name="phone"
					action={onChangeHandler}
					value={state.phone}
					placeholder="Contact phone number"
					type="text" // Could be a number, yet perhaps text is better for the (+) symbol with international format
				/>
				<InputWrapper
					id="company"
					name="company"
					action={onChangeHandler}
					value={state.company}
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
