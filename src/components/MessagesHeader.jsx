import { useAuth } from "../context/authProvider";
import { SlOptionsVertical } from "react-icons/sl";

export default function MessagesHeader() {
  const { user } = useAuth();

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="h-[60px] w-[60px] rounded-full bg-teal-600"></div>
        <div className="flex flex-col">
          <h1 className="pr-2 font-semibold">{user.first_name} </h1>
          <p>@{user.username}</p>
        </div>
      </div>
      <SlOptionsVertical />
    </div>
  );
}
