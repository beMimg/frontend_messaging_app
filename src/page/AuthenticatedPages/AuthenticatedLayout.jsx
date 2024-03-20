import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

export default function AuthenticatedLayout() {
  return (
    <div className="p-4">
      <Outlet />
      <Nav></Nav>
    </div>
  );
}
