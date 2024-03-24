import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

export default function AuthenticatedLayout() {
  return (
    <div className="dark:bg-neutral-800 dark:text-white lg:flex lg:h-screen lg:flex-row lg:gap-2 lg:overflow-hidden lg:p-3 ">
      <div className="absolute bottom-5 flex w-full items-center justify-center bg-gray-200  lg:static lg:w-[100px]  lg:rounded-2xl lg:dark:bg-neutral-950">
        <Nav></Nav>
      </div>
      <div className="bg-gray-200 lg:flex-1 lg:rounded-lg lg:dark:bg-neutral-950">
        <Outlet />
      </div>
    </div>
  );
}
