import { FaBinoculars, FaCheckSquare, FaClipboardList, FaCog, FaHome, FaThLarge } from "react-icons/fa";

export const sidebar_data=[{
      path: "/overview",
      name: "Overview",
      icon: <FaThLarge />,
    },
    {
      path: "/add-property",
      name: "Add Property",
      icon: <FaHome />,
    },
    {
      path: "/view-properties",
      name: "View Properties",
      icon: <FaBinoculars />,
    },
    {
      path: "/check-ins",
      name: "Check In",
      icon: <FaCheckSquare  />,
    },
    {
      path: "/checkouts",
      name: "Checkouts",
      icon: <FaClipboardList />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <FaCog />,
    },]