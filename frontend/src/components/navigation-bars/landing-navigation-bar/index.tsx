import { Navlink, StyledLink } from "@/components";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const LandingNavigationBar = () => {
  return (
    <nav className="lg:px-[10%] py-5 flex items-center justify-between shadow-lg">
      <Link to="/" className="text-xl font-bold tracking-wide">
        BowalPay
      </Link>

      <span className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          <li>
            <Navlink
              href=""
              label="Freelancers"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </li>

          <li>
            <Navlink
              href=""
              label="Business"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </li>

          <li>
            <Navlink
              href=""
              label="Marketplace"
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </li>
        </ul>

        <span className="flex items-center gap-6">
          <Link to="" className="text-base font-medium tracking-wide">
            Sign In
          </Link>

          <StyledLink
            label="Register"
            href="/"
            extraButtonClasses="rounded-full py-2 px-6 bg-black"
            extraLabelClasses="text-white"
            iconRight={<HiOutlineArrowSmRight color="#FFFFFF" />}
          />
        </span>
      </span>
    </nav>
  );
};

export default LandingNavigationBar;
