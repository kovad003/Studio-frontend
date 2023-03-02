import React from "react";
import styled from "styled-components";

const ImageLoading = () => {
	return (
		<StyledImageLoading>
			<div className="lds-dual-ring"></div>
		</StyledImageLoading>
	);
};

const StyledImageLoading = styled.div`
	width: 100%;
	padding: 30px;
	display: grid;
	place-items: center;

	.lds-dual-ring {
		display: inline-block;
		width: 80px;
		height: 80px;
	}
	.lds-dual-ring:after {
		content: " ";
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid dodgerblue;
		border-color: dodgerblue transparent dodgerblue transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default ImageLoading;
