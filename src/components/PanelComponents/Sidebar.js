import React from "react";
import { MdOndemandVideo, MdOutlinePriceChange, MdOutlineSpaceDashboard } from "react-icons/md";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { LuPackageCheck } from "react-icons/lu";
import { LiaHistorySolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/user";

function Sidebar({ isOpen }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full "
      } top-0 left-0 z-50 h-full w-72 bg-white shadow-md transition-transform duration-300 ease-in-out py-4 px-4`}
    >
      <div className="w-full flex justify-center">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          className="w-32 rounded-full outline outline-offset-4 outline-1 outline-red-500"
          alt="Avatar"
        />
      </div>
      <div className="text-center">
        <h2 className="font-bold text-red-500 text-xl mt-4">JOHN DOE</h2>
      </div>
      <div className="flex flex-col h-full px-2 my-4">
        <NavLink
          to="/panel/dashboard"
          className={({ isActive }) =>
            isActive ? "custom-active-link" : "custom-link"
          }
        >
          <MdOutlineSpaceDashboard className="mr-2 w-6 h-6" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to="/panel/plan"
          className={({ isActive }) =>
            isActive ? "custom-active-link" : "custom-link"
          }
        >
          <MdOutlinePriceChange className="mr-2 w-6 h-6" />
          <p>Plan</p>
        </NavLink>
        <NavLink
          to="/panel/videos"
          className={({ isActive }) =>
            isActive ? "custom-active-link" : "custom-link"
          }
        >
          <MdOndemandVideo className="mr-2 w-6 h-6" />
          <p>Videos</p>
        </NavLink>
        <NavLink
          to="/panel/packages"
          className={({ isActive }) =>
            isActive ? "custom-active-link" : "custom-link"
          }
        >
          <LuPackageCheck className="mr-2 w-6 h-6" />
          <p>Active Packages</p>
        </NavLink>
        <NavLink
          to="/panel/setting"
          className={({ isActive }) =>
            isActive ? "custom-active-link" : "custom-link"
          }
        >
          <FiSettings className="mr-2 w-6 h-6" />
          <p>Setting</p>
        </NavLink>
        <NavLink
          to="/panel/history"
          className={({ isActive }) =>
            isActive ? "custom-active-link" : "custom-link"
          }
        >
          <LiaHistorySolid className="mr-2 w-6 h-6" />
          <p>History</p>
        </NavLink>
        <NavLink
          onClick={() => dispatch(setToken(null))}
          className={"custom-link"}
        >
          <FiLogOut className="mr-2 w-6 h-6" />
          <p>Logout</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
