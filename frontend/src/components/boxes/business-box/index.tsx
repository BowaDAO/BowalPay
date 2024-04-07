import { Link } from "react-router-dom";
import { LinkGroup } from "@/components";
import { MdKeyboardArrowRight } from "react-icons/md";

const BusinessBox = () => {
  return (
    <div className="flex flex-col gap-10">
      <Link to="">
        <div className="flex flex-col gap-3 px-4">
          <span className="flex items-center gap-1">
            <h6 className="text-blue font-bold"> BowalPay account</h6>

            <MdKeyboardArrowRight color="#1698f4" />
          </span>

          <h6 className="text-black ">
            Helping businesses manage cross-border payments and grow globally.
          </h6>
        </div>
      </Link>

      <div className="flex">
        <div className="w-[70%] flex justify-between">
          <div className="flex flex-col gap-10">
            <article className="flex flex-col gap-3">
              <h6 className="text-blue mx-4 font-bold">Get paid</h6>

              <LinkGroup
                heading="Get paid by clients"
                subheading="Request and recieve payments"
                href=""
              />

              <LinkGroup
                heading="Get paid by marketplaces"
                subheading="Connect to marketplaces"
                href=""
              />

              <LinkGroup
                heading="Get paid on website"
                subheading="BowalPay checkout"
                href=""
              />

              <LinkGroup
                heading="Withdraw funds"
                subheading="To your bank account"
                href=""
              />
            </article>

            <article className="flex flex-col gap-3">
              <h6 className="text-blue mx-4 font-bold">Manage business</h6>

              <LinkGroup
                heading="Capital advance"
                subheading="Fund your business growth"
                href=""
              />

              <LinkGroup
                heading="Manage currencies"
                subheading="Transfer between balances"
                href=""
              />

              <LinkGroup
                heading="Partners directory"
                subheading="Exclusive offers from partners"
                href=""
              />

              <LinkGroup
                heading="Add funds to your account"
                subheading="Transfer funds from your bank"
                href=""
              />
            </article>
          </div>

          <div className="flex flex-col gap-10">
            <article className="flex flex-col gap-3">
              <h6 className="text-blue mx-4 font-bold">Make payments</h6>

              <LinkGroup
                heading="Pay your suppliers"
                subheading="Easy business payments"
                href=""
              />

              <LinkGroup
                heading="Pay your contractors"
                subheading="Send international payments"
                href=""
              />

              <LinkGroup
                heading="Pay business expenses"
                subheading="BowalPay card"
                href=""
              />

              <LinkGroup
                heading="Pay VAT"
                subheading="Directly from your account"
                href=""
              />
            </article>

            <article>
              <LinkGroup
                heading="Explore all business services"
                subheading="Grow your business"
                href=""
                headingExtraClasses="text-blue font-bold"
                cardExtraClasses="bg-grey"
              />
            </article>
          </div>
        </div>

        <div className="w-[30%]"></div>
      </div>
    </div>
  );
};

export default BusinessBox;
