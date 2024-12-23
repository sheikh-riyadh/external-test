import {
  FaBinoculars,
  FaHome,
  FaThLarge,
} from "react-icons/fa";

export const sidebar_data = [
  {
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
    path: "/all-properties",
    name: "All Properties",
    icon: <FaBinoculars />,
  },
];
