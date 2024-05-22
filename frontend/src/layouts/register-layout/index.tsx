import { AccountSetupNavigationBar } from "@/components";
import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const RegisterLayout = () => {
  return (
    <Fragment>
      <AccountSetupNavigationBar />
      <Outlet />
    </Fragment>
  );
};

export default RegisterLayout;
