import { Navlink, StyledLink, NavlinkDropdown } from "@/components";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const LandingNavigationBar = () => {
  const [showFreelancerDropdown, setShowFreelancerDropdown] = useState(false);
  const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);
  const [showMarketplaceDropdown, setShowMarketplaceDropdown] = useState(false);
  const [activeHover, setActiveHover] = useState(false);

  return (
    <div className="relative">
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
                setActiveHover={setActiveHover}
                onMouseEnter={() => setShowFreelancerDropdown(true)}
                onMouseLeave={() => setShowFreelancerDropdown(false)}
                activeHover={activeHover}
              />
            </li>

            <li>
              <Navlink
                href=""
                label="Business"
                onMouseEnter={() => setShowBusinessDropdown(true)}
                onMouseLeave={() => setShowBusinessDropdown(false)}
                activeHover={activeHover}
                setActiveHover={setActiveHover}
              />
            </li>

            <li>
              <Navlink
                href=""
                label="Marketplace"
                onMouseEnter={() => setShowMarketplaceDropdown(true)}
                onMouseLeave={() => setShowMarketplaceDropdown(false)}
                activeHover={activeHover}
                setActiveHover={setActiveHover}
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
          <div> AAAA</div>
        </NavlinkDropdown>
      )}

      {showBusinessDropdown && (
        <NavlinkDropdown
          onMouseEnter={() => setShowBusinessDropdown(true)}
          onMouseLeave={() => setShowBusinessDropdown(false)}
        >
          <div> BBB</div>
        </NavlinkDropdown>
      )}

      {showMarketplaceDropdown && (
        <NavlinkDropdown
          onMouseEnter={() => setShowMarketplaceDropdown(true)}
          onMouseLeave={() => setShowMarketplaceDropdown(false)}
        >
          <div> CCC</div>
        </NavlinkDropdown>
      )}
    </div>
  );
};

export default LandingNavigationBar;
