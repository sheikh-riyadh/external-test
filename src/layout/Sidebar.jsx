import { useState } from "react";
import { NavLink } from "react-router";
import { FaArrowLeft, FaArrowRight, FaSignOutAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { sidebar_data } from "../data/sidebar";
import person from "../assets/pd-person.jpg";

const Sidebar = ({ visibleArrow = true, setIsModalOpen = () => {} }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`h-[calc(100vh)] transition-all block bg-card sticky top-0 z-40 border-r border-border-primary ${
        isOpen ? "w-[250px]" : "w-[85px]"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between py-5 px-8">
            <h1 className={`${isOpen ? "block" : "hidden"} font-bold text-xl text-primary`}>ELYSIUM TECH</h1>
            <div
              className={`text-3xl -mr-11 z-50 text-[#fff] ${
                !visibleArrow ? "hidden" : "block"
              }`}
            >
              {isOpen ? (
                <FaArrowLeft
                  className="bg-blue-600 p-2 rounded-full cursor-pointer z-[999]"
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              ) : (
                <FaArrowRight
                  className="bg-blue-600 p-2 rounded-full cursor-pointer z-[999]"
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              )}
            </div>
          </div>
          <div>
            <span
              className={`px-8 font-semibold text-primary ${
                isOpen ? "text-base" : "text-sm"
              }`}
            >
              Menu
            </span>
            {sidebar_data.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsModalOpen(false)}
                  className="w-full flex items-center gap-5 py-3 px-8 font-semibold transition-all text-primary"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#2563eb" : undefined,
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
        <div className="px-4 py-5">
          <div>
            <div className="flex gap-4 pb-10">
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src={person}
                  alt="user"
                />
              </div>
              <div className="text-primary" style={{ display: isOpen ? "block" : "none" }}>
                <h3 className="text-base font-semibold">Amanda</h3>
                <p className="text-sm pt-2">Agant Account</p>
              </div>
            </div>
            <div
              className={`flex gap-3 items-center bg-blue-600 rounded-lg text-xl text-[#fff] p-4`}
            >
              <FaSignOutAlt className="text-base" />
              <button style={{ display: isOpen ? "block" : "none" }}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  visibleArrow: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
};

export default Sidebar;
