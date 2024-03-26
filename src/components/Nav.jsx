import { FiSearch } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

export default function Nav() {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  return (
    <nav className=" flex  flex-row gap-6 rounded-lg text-center lg:h-full lg:flex-col lg:items-center lg:justify-center ">
      <Link to="/" className="p-2 text-2xl">
        <FiMessageSquare />
      </Link>
      <Link className="p-2 text-2xl">
        <FiSearch />
      </Link>
      <Link to="/profile" className="p-2 text-2xl">
        <GoPerson />
      </Link>
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
