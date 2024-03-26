import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
import { useState } from "react";
import LogoutModal from "../../components/LogoutModal";
import ToggleThemeButton from "../../components/toggleThemeButton";
import { GoPencil } from "react-icons/go";
import DefaultImage from "../../components/DefaultImage";

export default function Profile() {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    user && (
      <div className="flex w-full flex-col">
        <div className="relative mb-14 lg:mb-32">
          <div className=" h-[180px] w-full bg-gradient-to-b from-rose-500 to-rose-900 lg:h-[300px] lg:rounded-t-lg"></div>
          <div className=" absolute -bottom-[50px] flex w-full items-center justify-center lg:-bottom-[100px]">
            <div className="hover-display relative h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]">
              <DefaultImage size="full" />
              <div className="hover-display-match absolute left-0 top-0 z-50 hidden   h-full w-full cursor-pointer items-center justify-center rounded-full  bg-black text-4xl opacity-45">
                <GoPencil />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-14  flex flex-col items-center justify-center gap-4">
          <h1 className="text-lg font-semibold">
            {user.first_name} @{user.username}
          </h1>
          {user.bio ? (
            <p>{user.bio}</p>
          ) : (
            <button className="flex flex-row items-center gap-2 opacity-60">
              Write your bio <GoPencil />
            </button>
          )}
        </div>
        <div className="flex w-min flex-col gap-10 p-4 text-lg">
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
