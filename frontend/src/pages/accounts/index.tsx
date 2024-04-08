import { AccountSetupNavigationBar } from "@/components";
import { ChooseAccountType } from "@/containers";

const Accounts = () => {
  return (
    <main>
      <AccountSetupNavigationBar />
      <ChooseAccountType />
    </main>
  );
};

export default Accounts;
