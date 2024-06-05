import { AccountTypeBox } from "@/components";
import { ACCOUNT_TYPE, accountTypes } from "@/constants/data";

const ChooseAccountType = () => {
  return (
    <section className="p-20 flex_col_center gap-8 blue-mix-background ">
      <div className=" text-black flex_col_justify_center text-center gap-5">
        <h1 className="text-5xl font-semibold leading-[1.4]">
          {ACCOUNT_TYPE.heading}
        </h1>

        <h6>{ACCOUNT_TYPE.subheading}</h6>

        <h3 className="text-2xl ">I'm a</h3>
      </div>

      <div className="grid grid-cols-5 gap-4 w-full">
        {accountTypes.map((accountType, index) => (
          <AccountTypeBox
            key={index}
            icon={accountType.icon}
            label={accountType.label}
          />
        ))}
      </div>
    </section>
  );
};

export default ChooseAccountType;
