import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Button from "../Button/Button";
import Form from "../Form";
import InputWrapper from "../Input/InputWrapper";
import PageContainer from "../PageContainer/PageContainer";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import TextAreaWrapper from "../TextArea/TextAreaWrapper";

const initialState = {
	title: { value: "", isError: false },
	isActive: { value: "", isError: false },
	description: { value: "", isError: false }
};

const CreateProject = () => {
	const [state, setState] = useState(initialState);

	const { auth } = useAuth();
	const navigate = useNavigate();

	const onChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		const newState = { ...state, [name]: { value, isError: false } };
		setState(newState);
		console.log(newState);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const newObj = {
			title: state.title.value,
			isActive: (state.isActive.value.toLowerCase() === "true"),
			description: state.description.value,
			createdOn: moment().toISOString()
		};

		try {
			const result = await axios.post(
				"/api/projects",
				JSON.stringify(newObj),
				{
					headers: {
						Authorization: `Bearer ${auth.accessToken}`,
					},
				}
			);
			toast.success("Project created successfully");
			navigate("/client/projects");
		} catch (error) {
			console.log(error.message);
			toast.error("Something went wrong");
		}
	};

	return (
		<StyledCreateProject>
			<PageContainer>
				<BreadCrumbs />
				<h1 className="page-title">Create Project</h1>

				<div className="CreateProject__Form">
					<Form width="545px" height="100%">
						<InputWrapper
							id="title"
							name="title"
							action={onChangeHandler}
							value={state.title}
							placeholder="Project Title"
							type="text"
						/>
						<TextAreaWrapper
							id="description"
							name="description"
							action={onChangeHandler}
							value={state.description}
							placeholder="Project Description"
						/>

						<div className="selectWrapper">
							<select
								id="isActive"
								name="isActive"
								value={state.isActive.value}
								className="selectBox"
								onChange={onChangeHandler}
							>
								<option disabled={true} value="">
									-- Project Status --
								</option>
								<option value="true">On-going</option>
								<option value="false">Done</option>
							</select>
						</div>

						<div
							className="CreateProject__btn"
						>
							<Button
								action={handleFormSubmit}
								className="CreateProject__btn-inner"
							>
								Create Project
							</Button>
						</div>
					</Form>
				</div>

			</PageContainer>
		</StyledCreateProject>
	);
};

const StyledCreateProject = styled.section`
	display: flex;
  justify-content: center;
  width: 100%;

  .CreateProject__Form {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 0px 0px 40px;
    background-color: ${(props) => props.theme.white};
  }

	.CreateProject__btn {
		margin-top: 40px;
	}

	.selectWrapper{
		margin-top: 40px;
		border-radius:10px;
		border: 0px;
		display:inline-block;
		overflow:hidden;
		background:#cccccc;
		border:1px solid #cccccc;
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
	}

	.selectBox{
		padding: 0 20px;
		width: 100%;
		height:45px;
		border:0px;
		font-size: 18px;
		outline:none;
	}
	`

export default CreateProject;
