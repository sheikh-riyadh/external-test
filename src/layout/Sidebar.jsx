import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router";
import { sidebar_data } from "../data/sidebar";
import person from "../assets/pd-person.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`h-[calc(100vh)] transition-all sticky top-0 z-50 bg-card ${
        isOpen ? "w-[300px]" : "w-[85px]"
      }`}
    >
      <ul className="flex gap-3  flex-col h-full">
        <div>
          <div className="sidebar">
            <div className="flex items-center justify-between py-5 px-8">
              <h1 className={`${isOpen ? "block" : "hidden"}`}>Logo</h1>
              <div className="text-3xl -mr-11 z-50 text-[#fff]">
                {isOpen ? (
                  <FaArrowLeft
                    className="bg-[#8649FC] p-2 rounded-full cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                  />
                ) : (
                  <FaArrowRight
                    className="bg-[#8649FC] p-2 rounded-full cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                  />
                )}
              </div>
            </div>
            <div>
              <li
                className={`px-8 font-semibold ${
                  isOpen ? "text-base" : "text-sm"
                }`}
              >
                Menu
              </li>
              {sidebar_data.map((item) => {
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="w-full flex items-center gap-5 py-3 px-8 font-semibold transition-all"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#8649FC" : undefined,
                      };
                    }}
                    title={item.name}
                  >
                    <div className="text-xl">{item.icon}</div>
                    <div className={`${isOpen ? "block" : "hidden"}`}>
                      {item.name}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <li className="mt-auto px-4 py-5">
          <div>
            <div className="flex gap-4 pb-10">
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src={person}
                  alt="user"
                />
              </div>
              <div style={{ display: isOpen ? "block" : "none" }}>
                <h3 className="text-base font-semibold">Amanda</h3>
                <p className="text-sm pt-2">Admin Account</p>
              </div>
            </div>
            <div
              className={`flex gap-3 items-center bg-[#8649FC] rounded-lg text-xl text-[#fff] p-4`}
            >
              <FaSignOutAlt className="text-base" />
              <button style={{ display: isOpen ? "block" : "none" }}>
                Logout
              </button>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
