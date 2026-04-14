import React from "react";

import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-white px-6 py-3 flex justify-between items-center border-b border-gray-300">
      
  {/* Logo */}
  <h1 className="text-xl font-semibold text-gray-800">
    <span className="font-bold">Keen</span>Keeper
  </h1>

  {/* Menu */}
  <div className="flex items-center gap-4 text-sm font-medium">
    
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "bg-green-800 text-white px-3 py-1 rounded flex items-center gap-1"
          : "text-gray-700 hover:text-black flex items-center gap-1"
      }
    >
      <FaHome /> Home
    </NavLink>

    <NavLink
      to="/timeline"
      className={({ isActive }) =>
        isActive
          ? "bg-green-800 text-white px-3 py-1 rounded flex items-center gap-1"
          : "text-gray-700 hover:text-black flex items-center gap-1"
      }
    >
      <MdTimeline /> Timeline
    </NavLink>

    <NavLink
      to="/stats"
      className={({ isActive }) =>
        isActive
          ? "bg-green-800 text-white px-3 py-1 rounded flex items-center gap-1"
          : "text-gray-700 hover:text-black flex items-center gap-1"
      }
    >
      <IoStatsChart /> Stats
    </NavLink>

  </div>
  
</div>
  );
};

export default Navbar;