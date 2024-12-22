import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
