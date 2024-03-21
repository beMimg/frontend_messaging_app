import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
import { useState } from "react";
import LogoutModal from "../../components/LogoutModal";
import ToggleThemeButton from "../../components/toggleThemeButton";

export default function Profile() {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    user && (
      <div className="flex h-screen flex-col">
        <div className="relative mb-14">
          <div className="h-[180px] w-full bg-black"></div>
          <div className="absolute -bottom-[50px] flex w-full items-center justify-center">
            <div className=" h-[100px] w-[100px]  rounded-full border-2 border-white bg-rose-500"></div>
          </div>
        </div>
        <div className="mb-14 flex flex-col items-center justify-center">
          <h1 className="text-lg font-semibold">
            {user.first_name} @{user.username}
          </h1>
          <p>{user.bio}</p>
        </div>
        <div className="flex flex-col gap-6 p-4 text-lg">
          <Link>Following</Link>
          <button
            onClick={() => setLogoutModalOpen(true)}
            className="text-start"
          >
            Logout
          </button>
          {logoutModalOpen && (
            <LogoutModal setLogoutModalOpen={setLogoutModalOpen} />
          )}
          <ToggleThemeButton />
        </div>
      </div>
    )
  );
}
