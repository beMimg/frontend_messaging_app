import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Unauthanticated Elements:
import UnauthenticatedHomepage from "./page/UnauthenticatedHomepage";
import SignUp from "./page/SignUp";
import LogIn from "./page/LogIn";

const Routes = () => {
  const routesForUnauthenticatedOnly = [
    { path: "/", element: <UnauthenticatedHomepage /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/login", element: <LogIn /> },
  ];

  const router = createBrowserRouter([...routesForUnauthenticatedOnly]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
