import { FiSearch } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

export default function Nav() {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const commonStyles =
    "flex justify-center  self-center rounded-lg  p-3 text-center text-2xl";
  const normalLink = `hover:bg-gray-200 hover:dark:bg-neutral-700 ${commonStyles}`;
  const activeLink = `bg-gray-300 dark:bg-neutral-600 ${commonStyles}`;

  return (
    <nav className=" flex  w-full flex-row gap-6 rounded-lg text-center lg:h-full lg:flex-col lg:items-center lg:justify-center">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <FiMessageSquare />
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <FiSearch />
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <GoPerson />
      </NavLink>
      <button
        onClick={() => setLogoutModalOpen(true)}
        className="hidden lg:block"
      >
        <TbLogout2 className="absolute bottom-10 left-[44px] text-2xl" />
      </button>
      {logoutModalOpen && (
        <LogoutModal setLogoutModalOpen={setLogoutModalOpen} />
      )}
    </nav>
  );
}
