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
  },
  {
    id: "active",
    icon: <AiOutlineDoubleRight size={18} />,
    title: "Active",
    icon2: <AiFillInfoCircle size={24} />,
    quantity: 6,
    background: "#FFDDB6",
  },
  {
    id: "completed",
    icon: <AiTwotoneTrophy size={18} />,
    title: "Completed",
    icon2: <AiFillInfoCircle size={24} />,
    quantity: 12,
    background: "#A2DAB8",
  },
];

export default data;
