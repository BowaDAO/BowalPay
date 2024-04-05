import {
  Navlink,
  StyledLink,
  NavlinkDropdown,
  FreelancersBox,
  BusinessBox,
  MarketplaceBox,
} from "@/components";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const LandingNavigationBar = () => {
  const [showFreelancerDropdown, setShowFreelancerDropdown] = useState(false);
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);

  return (
    <div className="relative">
      <nav className="lg:px-[8%] py-5 flex items-center justify-between shadow-md">
        <Link to="/" className="text-xl font-bold tracking-wide">
          BowalPay
        </Link>

        <span className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <Navlink
                href=""
                label="Freelancers"
                setActiveHover={setShowFreelancerDropdown}
                onMouseEnter={() => setShowFreelancerDropdown(true)}
                onMouseLeave={() => setShowFreelancerDropdown(false)}
                activeHover={showFreelancerDropdown}
              />
            </li>

            <li>
              <Navlink
                href=""
                label="Business"
                onMouseEnter={() => setShowBusinessDropdown(true)}
                onMouseLeave={() => setShowBusinessDropdown(false)}
                activeHover={showBusinessDropdown}
                setActiveHover={setShowBusinessDropdown}
              />
            </li>

            <li>
              <Navlink
                href=""
                label="Marketplace"
                onMouseEnter={() => setShowMarketplaceDropdown(true)}
                onMouseLeave={() => setShowMarketplaceDropdown(false)}
                activeHover={showMarketplaceDropdown}
                setActiveHover={setShowMarketplaceDropdown}
              />
            </li>
          </ul>

          <span className="flex items-center gap-6">
            <Link
              to=""
              className="text-base font-medium tracking-wide hover:text-purple"
            >
              Sign In
            </Link>

            <StyledLink
              label="Register"
              href="/"
              extraButtonClasses="rounded-full py-2 px-6 bg-purple hover:opacity-[96%]"
              extraLabelClasses="text-white"
              iconRight={<HiOutlineArrowSmRight color="#FFFFFF" />}
            />
          </span>
        </span>
      </nav>

      {showFreelancerDropdown && (
        <NavlinkDropdown
          onMouseEnter={() => setShowFreelancerDropdown(true)}
          onMouseLeave={() => setShowFreelancerDropdown(false)}
        >
          <FreelancersBox />
        </NavlinkDropdown>
      )}

      {showBusinessDropdown && (
        <NavlinkDropdown
          onMouseEnter={() => setShowBusinessDropdown(true)}
          onMouseLeave={() => setShowBusinessDropdown(false)}
        >
          <BusinessBox />
        </NavlinkDropdown>
      )}

      {showMarketplaceDropdown && (
        <NavlinkDropdown
          onMouseEnter={() => setShowMarketplaceDropdown(true)}
          onMouseLeave={() => setShowMarketplaceDropdown(false)}
        >
          <MarketplaceBox />
        </NavlinkDropdown>
      )}
    </div>
  );
};

export default LandingNavigationBar;
