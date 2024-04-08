import {
  FcBusinessContact,
  FcBusinessman,
  FcFilingCabinet,
  FcPlanner,
  FcViewDetails,
} from "react-icons/fc";
import { AccountTypeBox } from "@/components";

const ChooseAccountType = () => {
  return (
    <section className="p-20 flex_col_center gap-8 blue-mix-background ">
      <div className=" text-black flex_col_justify_center text-center gap-5">
        <h1 className="text-5xl font-semibold leading-[1.4]">
          Choose the right BowalPay account type for your business needs
        </h1>

        <h6>Please select the option that describes you the best</h6>

        <h3 className="text-2xl ">I'm a</h3>
      </div>

      <div className="grid grid-cols-5 gap-4 w-full">
        <AccountTypeBox
          icon={<FcPlanner className="h-20 w-20" />}
          label="Freelancer or SMB"
        />

        <AccountTypeBox
          icon={<FcViewDetails className="h-20 w-20" />}
          label="Online seller"
        />

        <AccountTypeBox
          icon={<FcFilingCabinet className="h-20 w-20" />}
          label="Affiliate marketer"
        />

        <AccountTypeBox
          icon={<FcBusinessContact className="h-20 w-20" />}
          label="Vacation rental host"
        />

        <AccountTypeBox
          icon={<FcBusinessman className="h-20 w-20" />}
          label="Individual"
        />
      </div>
    </section>
  );
};

export default ChooseAccountType;
