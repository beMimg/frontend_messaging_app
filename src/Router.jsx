import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Unauthanticated Routes:
import UnauthenticatedHomepage from "./page/UnauthenticatedHomepage";
import SignUp from "./page/SignUp";
import LogIn from "./page/LogIn";

// Public Routes:
import AboutUs from "./page/AboutUs";

const Routes = () => {
  const routesForPublic = [{ path: "/about-us", element: <AboutUs /> }];

  const routesForUnauthenticatedOnly = [
    { path: "/", element: <UnauthenticatedHomepage /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/login", element: <LogIn /> },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForUnauthenticatedOnly,
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
