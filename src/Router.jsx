import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Unauthanticated Routes:
import UnauthenticatedHomepage from "./page/UnauthenticatedPages/UnauthenticatedHomepage";
import SignUp from "./page/UnauthenticatedPages/SignUp";
import LogIn from "./page/UnauthenticatedPages/LogIn";

// Public Routes:
import AboutUs from "./page/PublicPages/AboutUs";

//  Authenticated Routes:
import AuthenticatedHomepage from "./page/AuthenticatedPages/AuthenticatedHomepage";

const Routes = () => {
  const routesForPublic = [{ path: "/about-us", element: <AboutUs /> }];

  const routesForUnauthenticatedOnly = [
    { path: "/", element: <UnauthenticatedHomepage /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/login", element: <LogIn /> },
  ];

  const routesForAuthenticatedOnly = [
    { path: "/", element: <AuthenticatedHomepage /> },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForUnauthenticatedOnly,
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
