import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

export default function AuthenticatedLayout() {
  return (
    <div className="relative flex h-screen w-screen  items-center justify-center ">
      <div className="absolute z-10 flex h-screen w-screen flex-col">
        <div className=" h-[20%] bg-rose-500"></div>
        <div className="h-full bg-gray-200"></div>
      </div>
      <div className="absolute z-20 w-full  bg-gray-200 font-sans dark:bg-neutral-800 dark:text-white lg:flex  lg:h-[90%] lg:w-[90%]  lg:flex-row">
        <div className="absolute flex h-[80px] w-full items-center  justify-center bg-white dark:bg-neutral-900 lg:static lg:h-full lg:w-[100px] ">
          <Nav></Nav>
        </div>
        <div className=" min-h-screen bg-white pt-[80px] dark:bg-neutral-900 lg:flex lg:min-h-0 lg:flex-1  lg:pt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
