import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

export default function AuthenticatedLayout() {
  return (
    <div className="lg:flex lg:flex-row">
      <div className="absolute bottom-5  flex w-full items-center justify-center lg:static lg:h-screen lg:w-[100px] ">
        <Nav></Nav>
      </div>
      <div className="lg:flex-1">
        <Outlet />
      </div>
    </div>
  );
}
