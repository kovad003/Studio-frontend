import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import SectionTitle from "../ProjectInfo/SectionTitle";
import Avatar from "../ProjectList/Avatar";
import Status from "../Status/Status";
import {
	MdOutlineDescription,
	MdOutlineAttachFile,
	MdOutlineInsertComment,
	MdEdit,
	MdSave,
	MdCancel
} from "react-icons/md";
import CommentSection from "../ProjectInfo/CommentSection";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { toast } from "react-toastify";
import DescriptionEdit from "../ProjectInfo/Edit/Description";
import StatusEdit from "../ProjectInfo/Edit/Status";

const UserProject = () => {
	const [project, setProject] = useState(null);
	const [tmpProject, setTmpProject] = useState(null);
	const [comments, setComments] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
	const [isUpdates, setIsUpdates] = useState(true); // toggle if there is a new update
	const [connection, setConnection] = useState(null);
	const { auth } = useAuth();
	const { id } = useParams();

	const getProject = async () => {
		try {
			const response = await axios.get(`/api/projects/${id}`, {
				headers: {
					Authorization: `Bearer ${auth.accessToken}`,
				},
			});
			setProject(response.data);
			setComments(response.data.comments);
			setTmpProject(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	
	const editProject = async () => {
		try {
			const project = tmpProject;
			delete project.owner;
			delete project.photos;
			delete project.comments;
			delete project.id;

			const response = await axios.put(`/api/projects/${id}`, project, {
				headers: {
					Authorization: `Bearer ${auth.accessToken}`,
					'content-type': 'application/json',
				},
			});
			
			if (response.status === 200) {
				console.log("working")
				setIsUpdates(true);
				setIsEdit(!isEdit);
				toast.success("Project has been updated successfully");
			} else {
				console.log("not working")
				toast.error("Something went wrong when editing the project");
			};
			
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong when editing the project");
		}
	};

	const createConnection = async () => {
		try {
			const connection = new HubConnectionBuilder()
				.withUrl(`${process.env.REACT_APP_API_URL}/chat?projectId=${id}`, {
					accessTokenFactory: () => auth.accessToken,
				})
				.withAutomaticReconnect()
				.configureLogging(LogLevel.Information)
				.build();

			connection.on("LoadComments", (response) => {
				setComments(response);
			});

			connection.on("ReceiveComment", (response) => {
				setComments((current) => {
					const newComments = [...current];
					newComments.push(response);
					return newComments;
				});
			});

			await connection.start();
			setConnection(connection);
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong while loading the comments");
		}
	};

	const editButtonHandler = () => {
		setIsEdit(!isEdit);
	};

	const saveButtonHandler = () => {
		editProject()
	};

	const cancelButtonHandler = () => {
		setIsEdit(!isEdit);
		setTmpProject(project)
	};

	useEffect(() => {
		if (isUpdates) {
			getProject();
			setIsUpdates(false);
		}
	}, [isUpdates]);

	useEffect(() => {
		createConnection();
	}, []);

	return (
		<PageContainer>
			<BreadCrumbs />
			<h1 className="page-title">Project Info</h1>
			<StyledUserProject>
				{project ? (
					<>
						<main className="projcet--main-content">
							<section className="project-section">
								<div className="project--header">
									<h1 className="project-title">{project.title}</h1>
								</div>
								<SectionTitle>
									<MdOutlineDescription size={22} />
									Description
								</SectionTitle>
								{ isEdit ? (
									<DescriptionEdit tmpProject={tmpProject} setTmpProject={setTmpProject} />
								) : (
									<p className="project-description">{project.description}</p>
								)}
								<SectionTitle>
									<MdOutlineAttachFile size={22} />
									Attachments
								</SectionTitle>
								<section className="project-attachment">
									{project.photos.length > 0 ? (
										project.photos.map((image) => {
											return (
												<a href={image.url} target="_blank" key={image.id}>
													<img key={image.id} src={image.url} alt={image.id} />
												</a>
											);
										})
									) : (
										<div className="no-content">No image to display</div>
									)}
								</section>
								<SectionTitle>
									<MdOutlineInsertComment size={22} />
									Comments
								</SectionTitle>
								<CommentSection
									comments={comments}
									connection={connection}
									projectId={id}
								/>
							</section>
							<section className="project-details">
								<SectionTitle>Project details</SectionTitle>
								<div className="project-details-card">
									<div className="detail-item">
										<span>Status: </span>
										<span>
											{ isEdit ? (
												<StatusEdit tmpProject={tmpProject} setTmpProject={setTmpProject} />
											) : (
												<Status type={project.isActive} />
											)}
										</span>
									</div>
									<div className="detail-item">
										<span>Created at: </span>
										<span>
											{new Date(project.createdOn).toLocaleDateString()}
										</span>
									</div>
									<div className="detail-item">
										<span>Client: </span>
										<span className="client-name">
											<Avatar owner={project.owner} />
											<span>
												{project.owner.firstName} {project.owner.lastName}
											</span>
										</span>
									</div>
								</div>
									{ isEdit ? (
										<div className="wrapper-project-edit-btn">
											<button className="project--edit-btn" onClick={saveButtonHandler}>
												<MdSave size={16} />
												Save
											</button>
											<button className="project--edit-btn" onClick={cancelButtonHandler}>
												<MdCancel size={16} />
												Cancel
											</button>
										</div>
									) : (
										<button className="project--edit-btn" onClick={editButtonHandler}>
											<MdEdit size={16} />
											Edit
										</button>
									)}
							</section>
						</main>
					</>
				) : (
					"Loading..."
				)}
			</StyledUserProject>
		</PageContainer>
	);
};

const StyledUserProject = styled.section`
	padding: 20px;
	background-color: #fff;
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: 10px;

	.projcet--main-content {
		display: flex;
		align-items: flex-start;
		gap: 20px;

		.project-details {
			width: 300px;

			.project-details-card {
				background-color: #eff5ff;
				border-radius: 10px;
				padding: 20px;

				.detail-item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 14px;
					margin-bottom: 6px;

					.client-name {
						display: flex;
						align-items: center;
						justify-content: space-between;
						gap: 4px;
					}
				}
			}

			.wrapper-project-edit-btn {
				display: flex;
				justify-content: space-evenly;
			}

			.project--edit-btn {
				width: 120px;
				height: 30px;
				background-color: #445e85;
				color: #fff;
				border-radius: 4px;
				border: none;
				margin-top: 10px;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;

				svg {
					margin-right: 4px;
				}
			}

			.project--edit-btn:hover {
				background-color: #5e7493;
		    transition: all 0.3s ease;
			}
		}

		.project-section {
			margin-top: 20px;
			flex: 1;

			.no-content {
				text-align: center;
				color: #c4c4c4;
				font-weight: 900;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			img {
				width: 150px;
				height: 100px;
				border-radius: 10px;
				object-fit: cover;
			}

			.project--header {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.project-title {
					font-size: 20px;
				}
			}

			.project-description {
				font-size: 14px;
				font-weight: 400;
				line-height: 1.8;
			}
		}
	}
`;

export default UserProject;
