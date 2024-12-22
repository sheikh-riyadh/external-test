import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "../components/common/Header";
// import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header />
        <div className="p-5 w-full">
          <Outlet />
        </div>
      </div>

      <div className="fixed top-2/4 right-0 bg-card p-2 rounded-l-lg border border-border-primary">
        <div>
          <IoMdSunny className="text-2xl spin text-primary"/>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
