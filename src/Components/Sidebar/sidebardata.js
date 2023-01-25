import React from "react";
import { FaFolder, FaUserAlt, FaBell, FaHome } from "react-icons/fa";

const data = [
	{ id: "home", name: "Home", icon: <FaHome size={24} /> },
	{ id: "folders", name: "Folders", icon: <FaFolder size={21} /> },
	{ id: "updates", name: "Updates", icon: <FaBell size={22} /> },
	{ id: "users", name: "Users", icon: <FaUserAlt size={22} /> },
];

export default data;
