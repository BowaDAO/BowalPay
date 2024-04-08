import { AccountSetupNavigationBar } from "@/components";
import { Outlet } from "react-router-dom";

const RegisterLayout = () => {
  return (
    <div>
      <AccountSetupNavigationBar />

      <Outlet />
    </div>
  );
};

export default RegisterLayout;
