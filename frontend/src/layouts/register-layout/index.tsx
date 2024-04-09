import { AccountSetupNavigationBar } from "@/components";
import { Outlet } from "react-router-dom";

const RegisterLayout = () => {
  return (
    <>
      <AccountSetupNavigationBar />

      <Outlet />
    </>
  );
};

export default RegisterLayout;
