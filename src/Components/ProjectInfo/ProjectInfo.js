import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PageContainer from "../PageContainer/PageContainer";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import SectionTitle from "./SectionTitle";
import Avatar from "../ProjectList/Avatar";
import Status from "../Status/Status";
import {
	MdOutlineDescription,
	MdOutlineAttachFile,
	MdOutlineInsertComment,
	MdEdit,
	MdSave,
	MdCancel,
} from "react-icons/md";
import { BsFillCloudUploadFill, BsFillImageFill } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import CommentSection from "./CommentSection";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { toast } from "react-toastify";
import DescriptionEdit from "./Edit/Description";
import StatusEdit from "./Edit/Status";
import Button from "../Button/Button";
import ImageLoading from "../ImageLoading";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ProjectInfo = () => {
	const [project, setProject] = useState(null);
	const [tmpProject, setTmpProject] = useState(null);
	const [comments, setComments] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
	const [isUpdates, setIsUpdates] = useState(true); // toggle if there is a new update
	const [connection, setConnection] = useState(null);
	const [imageLoading, setImageLoading] = useState(false);
	const [images, setImages] = useState([]);
	const { auth } = useAuth();
	const { id } = useParams();

	const deleteImage = async (id) => {
		try {
			await axios.delete(`/api/photos/${id}`, {
				headers: {
					Authorization: `Bearer ${auth.accessToken}`,
				},
			});
			toast.success("Image deleted successfully!");
			const tempProject = { ...project };
			const newImages = tempProject.photos.filter((photo) => photo.id !== id);
			tempProject.photos = newImages;
			setProject(tempProject);
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong while deleting the image");
		}
	};

	const handleImageDelete = (id) => {
		confirmAlert({
			message: "Do you want to delete this image?",
			buttons: [
				{
					label: "Delete",
					onClick: () => deleteImage(id),
				},
				{
					label: "No",
					onClick: console.log("closed"),
				},
			],
		});
	};

	const fileUploadHandler = (e) => {
		const tempImg = e.target.files;
		const tempImages = [...images];
		Object.keys(tempImg).forEach((img) => {
			tempImages.push(tempImg[img]);
		});
		setImages(tempImages);
	};

	const uploadImages = () => {
		if (images.length > 0) {
			setImageLoading(true);
			try {
				images.forEach(async (image) => {
					const formdata = new FormData();
					formdata.append("File", image, image.name);
					const response = await axios.post(`/api/photos/${id}`, formdata, {
						headers: {
							Authorization: `Bearer ${auth.accessToken}`,
							"Content-Type": "multiple/form-data",
						},
					});
					console.log(response);
					const tempProject = { ...project };
					tempProject.photos.push(response.data);
					setProject(tempProject);
					setImageLoading(false);
					setImages([]);
				});
			} catch (error) {
				console.log(error);
				toast.error("Something went wrong while uploding images");
			}
		} else {
			toast.error("Please add an image");
		}
	};

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
					"content-type": "application/json",
				},
			});

			if (response.status === 200) {
				console.log("working");
				setIsUpdates(true);
				setIsEdit(!isEdit);
				toast.success("Project has been updated successfully");
			} else {
				console.log("not working");
				toast.error("Something went wrong when editing the project");
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong when editing the project");
		}
	};

	const handleRemoveFromPreview = (name) => {
		const tempImages = [...images];
		const temp = tempImages.filter((image) => image.name !== name);
		setImages(temp);
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
		editProject();
	};

	const cancelButtonHandler = () => {
		setIsEdit(!isEdit);
		setTmpProject(project);
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
			<StyledProjectInfo>
				{project ? (
					<>
						<main className="projcet--main-content">
							<section className="project-info">
								<div className="project-info--header">
									<h1 className="project-info--title">{project.title}</h1>
								</div>
								<SectionTitle>
									<MdOutlineDescription size={22} />
									Description
								</SectionTitle>
								{isEdit ? (
									<DescriptionEdit
										tmpProject={tmpProject}
										setTmpProject={setTmpProject}
									/>
								) : (
									<p className="project-description">{project.description}</p>
								)}
								<SectionTitle>
									<MdOutlineAttachFile size={22} />
									Attachments
								</SectionTitle>
								<section className="project-attachment">
									<section className="uploaded-images-container">
										{project.photos.length > 0 ? (
											project.photos.map((image) => {
												return (
													<div>
														<a href={image.url} target="_blank" key={image.id}>
															<img
																key={image.id}
																src={image.url}
																alt={image.id}
															/>
														</a>
														<button onClick={() => handleImageDelete(image.id)}>
															Delete
														</button>
													</div>
												);
											})
										) : (
											<div className="no-content--container">
												<div className="no-content">No image to display</div>
											</div>
										)}
									</section>
									<section className="upload-image--outer">
										<div className="upload-image--container">
											{images.length > 0 ? (
												<section className="uploaded-image--preview">
													{images.length > 0
														? images.map((image) => {
																return (
																	<section className="image-preview--container">
																		<div
																			className="image-preview"
																			key={image.name}
																		>
																			<div>
																				<span className="image-preview--icon">
																					<BsFillImageFill />
																				</span>
																				<span className="image-preview--name">
																					{image.name}
																				</span>
																			</div>
																			<span
																				className="image-preview--close-btn"
																				onClick={() =>
																					handleRemoveFromPreview(image.name)
																				}
																			>
																				<FaTimesCircle />
																			</span>
																		</div>
																	</section>
																);
														  })
														: ""}
													{imageLoading ? <ImageLoading /> : ""}
												</section>
											) : (
												""
											)}
											<div className="upload-image-input">
												<label htmlFor="upload-image">
													<div className="upload-image--icon">
														<BsFillCloudUploadFill size={22} />
													</div>
													<span>Upload image</span>
												</label>
												<input
													type="file"
													name="upload-image"
													id="upload-image"
													onChange={fileUploadHandler}
												/>
											</div>
										</div>
										<div style={{ width: 150 }}>
											<Button action={uploadImages}>Upload Image</Button>
										</div>
									</section>
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
											{isEdit ? (
												<StatusEdit
													tmpProject={tmpProject}
													setTmpProject={setTmpProject}
												/>
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
								{isEdit ? (
									<div className="wrapper-project-edit-btn">
										<button
											className="project--edit-btn"
											onClick={saveButtonHandler}
										>
											<MdSave size={16} />
											Save
										</button>
										<button
											className="project--edit-btn"
											onClick={cancelButtonHandler}
										>
											<MdCancel size={16} />
											Cancel
										</button>
									</div>
								) : (
									<button
										className="project--edit-btn"
										onClick={editButtonHandler}
									>
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
			</StyledProjectInfo>
		</PageContainer>
	);
};

const StyledProjectInfo = styled.section`
	padding: 20px;
	background-color: #fff;
	border: 1px solid ${(props) => props.theme.borderColor};
	border-radius: 10px;

	.projcet--main-content {
		display: flex;
		align-items: flex-start;
		gap: 20px;

		.project-info {
			margin-top: 20px;
			flex: 1;

			.project-info--header {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.project-info--title {
					font-size: 20px;
				}
			}

			.no-content {
				text-align: center;
				color: #c4c4c4;
				font-weight: 900;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			.no-content--container {
				display: flex;
				align-items: center;
				flex-direction: column;
				gap: 20px;
				justify-content: center;
				width: 100%;
				background-color: #fff !important;
				border: none !important;
			}

			.project-description {
				font-size: 14px;
				font-weight: 400;
				line-height: 1.8;
			}

			.project-attachment {
				.uploaded-images-container {
					display: flex;
					padding: 0 0 20px 0;
					gap: 10px;
					flex-flow: wrap;

					> div {
						background-color: #fbfbfb;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						padding: 4px;
						border-radius: 10px;
						border: 1px solid ${(props) => props.theme.borderColor};

						a {
							display: block;
							margin-bottom: 4px;

							img {
								display: block;
								margin: auto;
							}
						}

						button {
							background-color: tomato;
							color: #fff;
							border: none;
							border-radius: 4px;
							padding: 2px 4px;
							cursor: pointer;
							font-size: 12px;
							font-weight: 700;
						}
					}
				}

				.upload-image--container {
					margin: auto;

					.uploaded-image--preview {
						width: 100%;
						display: flex;
						padding: 0 0 20px 0;
						gap: 10px;
					}

					.upload-image-input {
						label {
							height: 70px;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							padding: 20px;
							text-align: center;
							color: gray;
							gap: 4px;
							background-color: #f1f5f9;
							width: 200px;
							border-radius: 10px;
							border: 1px solid ${(props) => props.theme.borderColor};
							cursor: pointer;
							transition: all 0.3s ease;
							width: 100%;

							:hover {
								border-color: ${(props) => props.theme.primaryColor};
								color: ${(props) => props.theme.primaryColor};

								.upload-image--icon {
									svg {
										fill: ${(props) => props.theme.primaryColor};
									}
								}
							}

							.upload-image--icon {
								transition: all 0.3s ease;
								svg {
									fill: gray;
									transition: all 0.3s ease;
								}
							}
						}
					}

					input[type="file"] {
						width: 0;
						height: 0;
						visibility: hidden;
						opacity: 0;
						margin-right: 10px;
					}
				}
			}

			.image-preview {
				width: 250px;
				background-color: #eff5ff;
				border: 1px solid ${(props) => props.theme.borderColor};
				font-size: 14px;
				padding: 2px 10px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 10px;
				border-radius: 4px;
				margin-bottom: 10px;

				> div {
					display: flex;
					align-items: center;
					gap: 10px;
					flex: 1;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;

					.image-preview--icon {
						width: 20px;
					}
				}

				.image-preview--close-btn {
					width: 20px;
					display: grid;
					place-items: center;
					cursor: pointer;

					svg {
						display: grid;
						place-items: center;
						color: tomato;
					}
				}
			}

			img {
				width: 150px;
				height: 100px;
				border-radius: 10px;
				object-fit: cover;
				margin-right: 10px;
			}
		}

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

				svg {
					margin-right: 4px;
				}
			}
		}
	}
`;

export default ProjectInfo;
