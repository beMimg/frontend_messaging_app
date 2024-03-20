import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Unauthanticated Routes:
import UnauthenticatedHomepage from "./page/UnauthenticatedPages/UnauthenticatedHomepage";
import SignUp from "./page/UnauthenticatedPages/SignUp";
import LogIn from "./page/UnauthenticatedPages/LogIn";

// Public Routes:
import AboutUs from "./page/PublicPages/AboutUs";

//  Authenticated Routes:
import AuthenticatedLayout from "./page/AuthenticatedPages/AuthenticatedLayout";
import { useAuth } from "./context/authProvider";
import Messages from "./page/AuthenticatedPages/Messages";

const Routes = () => {
  // Use Context of Authorization
  const { token } = useAuth();

  const routesForPublic = [{ path: "/about-us", element: <AboutUs /> }];

  const routesForUnauthenticatedOnly = [
    { path: "/", element: <UnauthenticatedHomepage /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/login", element: <LogIn /> },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <AuthenticatedLayout />,
      children: [{ index: true, path: "/messages", element: <Messages /> }],
    },
  ];

  // If diferrent routes depedding on if the user has token or not.
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForUnauthenticatedOnly : []),
    ...(token ? routesForAuthenticatedOnly : []),
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
