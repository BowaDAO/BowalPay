import { Logo } from "@/components";
import { Link } from "react-router-dom";

const AccountSetupNavigationBar = () => {
  return (
    <nav className="lg:px-[8%] py-5 flex items-center justify-between shadow-md bg-white w-full z-[100] sticky top-0 left-0">
      <Logo />

      <Link
        to=""
        className="text-base font-medium tracking-wide hover:text-blue"
      >
        Sign In
      </Link>
    </nav>
  );
};

export default AccountSetupNavigationBar;
