import { useAuth } from "../context/authProvider";
import { SlOptionsVertical } from "react-icons/sl";
import DefaultImage from "./DefaultImage";

export default function MessagesPageHeader() {
  const { user } = useAuth();

  return (
    <div className="flex flex-row items-center justify-between bg-gray-100 p-3 dark:bg-neutral-800">
      <div className="flex flex-row items-center gap-2">
        {user.profile_pic_src ? (
          <img
            className="h-[60px] w-[60px] rounded-full border-4 border-gray-200  object-cover object-center"
            src={user.profile_pic_src}
            alt=""
          />
        ) : (
          <DefaultImage size="[60px]" />
        )}
        <div className="flex flex-col">
          <h1 className="pr-2 font-semibold">{user.first_name} </h1>
          <p>@{user.username}</p>
        </div>
      </div>
      <SlOptionsVertical />
    </div>
  );
}
