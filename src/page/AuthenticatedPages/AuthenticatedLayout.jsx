import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

export default function AuthenticatedLayout() {
  return (
    <div className=" bg-neutral-100 font-sans dark:bg-neutral-800 dark:text-white lg:flex lg:h-screen  lg:flex-row lg:gap-2 lg:p-3">
      <div className="absolute bottom-5 flex w-full items-center justify-center   bg-neutral-300 dark:bg-neutral-900  lg:static lg:w-[100px] lg:rounded-2xl">
        <Nav></Nav>
      </div>
      <div className=" min-h-screen bg-neutral-300 dark:bg-neutral-900 lg:flex lg:min-h-0 lg:flex-1 lg:rounded-lg">
        <Outlet />
      </div>
    </div>
  );
}
