import { createBrowserRouter } from "react-router-dom";
import { Accounts, LandingPage, NotFound, Signin, Signup } from "@/pages";
import { RegisterLayout } from "@/layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    element: <RegisterLayout />,
    children: [
      {
        path: "accounts",
        element: <Accounts />,
      },

      {
        path: "register",
        element: <Signup />,
      },
    ],
  },

  {
    path: "login",
    element: <Signin />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
