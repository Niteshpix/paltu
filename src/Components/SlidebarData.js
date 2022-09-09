import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Category",
    path: "/category",
    icon: <MdIcons.MdCategory/>,
    cName: "nav-text"
  },
  {
    title: "Services",
    path: "/services",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  },
  {
    title: "User",
    path: "/user",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text"
  },
  
];
