import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={` h-screen bg-gray-800 text-white fixed ${
        open ? "w-64" : "w-12 bg-transparent"
      } duration-300`}
    >
      <div className="relative float-end me-3 mt-6">
        <FaArrowLeftLong
          className={`bg-white text-black rounded-full p-2 text-4xl border-black cursor-pointer ${
            !open && "rotate-180 text-black border-stone-950"
          } duration-300 `}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className={`p-4 text-2xl font-semibold ${!open ? "hidden" : ""}`}>
        My Dashboard
      </div>
      <nav className={`mt-4 ${!open ? "hidden" : ""}`}>
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/profiles">Profile</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
