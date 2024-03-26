import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

export default function AuthenticatedLayout() {
  return (
    <div className=" font-sans dark:bg-neutral-950 dark:text-white lg:flex lg:h-screen lg:flex-row  lg:gap-2 lg:p-3 lg:dark:bg-neutral-800">
      <div className="absolute bottom-5 flex w-full items-center justify-center   dark:bg-neutral-900 lg:static  lg:w-[100px] lg:rounded-2xl lg:bg-gray-200">
        <Nav></Nav>
      </div>
      <div className=" min-h-screen dark:bg-neutral-900 lg:flex lg:min-h-0 lg:flex-1 lg:rounded-lg lg:bg-gray-200">
        <Outlet />
      </div>
    </div>
  );
}
