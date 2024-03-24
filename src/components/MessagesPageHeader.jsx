import { useAuth } from "../context/authProvider";
import { SlOptionsVertical } from "react-icons/sl";
import glassesKissSvg from "../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";

export default function MessagesPageHeader() {
  const { user } = useAuth();

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        {user.profile_pic_src ? (
          <img
            className="h-[60px] w-[60px] rounded-full border border-gray-300  object-cover object-center"
            src={user.profile_pic_src}
            alt=""
          />
        ) : (
          <img
            src={glassesKissSvg}
            className="h-[60px] w-[60px] rounded-full border border-gray-300  object-cover object-center"
          />
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
