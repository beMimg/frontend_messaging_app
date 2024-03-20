import { Link } from "react-router-dom";
import { useAuth } from "../../context/authProvider";

export default function Profile() {
  const { user } = useAuth();
  console.log(user);
  return (
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
        <Link>Logout</Link>
        <button className="text-start">Theme Mode</button>
      </div>
    </div>
  );
}