import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

export default function AuthenticatedLayout() {
  return (
    <div>
      <Outlet />
      <Nav></Nav>
    </div>
  );
}
