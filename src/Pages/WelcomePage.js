import React from "react";
import { toast } from "react-toastify";
import Button from "../Components/Button/Button";

const WelcomePage = () => {
	const handleClick = () => {
		toast.success("This is great");
	};
	return (
		<div>
			<Button action={handleClick}>Click me</Button>
		</div>
	);
};

export default WelcomePage;
