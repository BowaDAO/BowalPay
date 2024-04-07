import { Link } from "react-router-dom";
import { LinkGroup } from "@/components";
import { MdKeyboardArrowRight } from "react-icons/md";

const MarketplaceBox = () => {
  return (
    <div className="flex flex-col gap-10">
      <Link to="">
        <div className="flex flex-col gap-3 px-4">
          <span className="flex items-center gap-1">
            <h6 className="text-blue font-bold">Mass payout platform</h6>

            <MdKeyboardArrowRight color="#1698f4" />
          </span>

          <h6 className="text-black ">
            Trusted by millions of markerplaces, sellers, and service providers
            worldwide
          </h6>
        </div>
      </Link>

      <div className="flex">
        <div className="w-[70%] flex justify-between">
          <div className="flex flex-col gap-10">
            <article className="flex flex-col gap-3">
              <LinkGroup
                heading="Payouts"
                subheading="Pay in 190+ countries"
                href=""
              />

              <LinkGroup
                heading="Manage currencies"
                subheading="Multicurrency payouts"
                href=""
              />

              <LinkGroup
                heading="Payment collection"
                subheading="Automated payment collection"
                href=""
              />

              <LinkGroup
                heading="Risk and fraud"
                subheading="Secure every transaction"
                href=""
              />

              <LinkGroup
                heading="Tax form collection"
                subheading="Automated tax payments"
                href=""
              />
            </article>

            <p>
              * Please click here if you are an{" "}
              <span className="underline text-blue">online seller</span>
            </p>
          </div>

          <LinkGroup
            heading="Explore all marketplace services"
            subheading="Grow your marketplace"
            href=""
            headingExtraClasses="text-blue font-bold"
            cardExtraClasses="bg-grey"
          />
        </div>

        <div className="w-[30%]"></div>
      </div>
    </div>
  );
};

export default MarketplaceBox;
