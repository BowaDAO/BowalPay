import { createBrowserRouter } from "react-router-dom";
import {
  Accounts,
  ForgotPassword,
  Home,
  LandingPage,
  NotFound,
  ResetPassword,
  Signin,
  Signup,
} from "@/pages";
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
    path: "forgot-password",
    element: <ForgotPassword />,
  },

  {
    path: "reset-password",
    element: <ResetPassword />,
  },

  {
    path: "home",
    element: <Home />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
