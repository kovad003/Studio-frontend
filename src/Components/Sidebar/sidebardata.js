import React from "react";
import { FaUserAlt, FaBell, FaHome, FaDraftingCompass } from "react-icons/fa";

const data = [
	{ id: "home", name: "Home", icon: <FaHome size={24} /> },
	{ id: "projects", name: "Projects", icon: <FaDraftingCompass size={22} /> },
	{ id: "updates", name: "Updates", icon: <FaBell size={22} /> },
	{ id: "users", name: "Users", icon: <FaUserAlt size={22} /> },
];

export default data;
