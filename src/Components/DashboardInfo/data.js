import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import {
  AiFillInfoCircle,
  AiOutlineDoubleRight,
  AiTwotoneTrophy,
} from "react-icons/ai";

const data = [
  {
    id: "customers",
    icon: <HiShoppingBag size={18} />,
    title: "Customers",
    icon2: <AiFillInfoCircle size={24} />,
    quantity: 18,
    background: "#E5F0FF",
    guidance: "The total number of customers registered into the app",
    guidanceIcon: <AiFillInfoCircle size={18} />,
  },
  {
    id: "active",
    icon: <AiOutlineDoubleRight size={18} />,
    title: "Active",
    icon2: <AiFillInfoCircle size={24} />,
    quantity: 6,
    background: "#FFDDB6",
    guidance: "The total number of projects which are currently in-progress",
    guidanceIcon: <AiFillInfoCircle size={18} />,
  },
  {
    id: "completed",
    icon: <AiTwotoneTrophy size={18} />,
    title: "Completed",
    icon2: <AiFillInfoCircle size={24} />,
    quantity: 12,
    background: "#A2DAB8",
    guidance: "The total number of projects which have been completed",
    guidanceIcon: <AiFillInfoCircle size={18} />,
  },
];

export default data;
