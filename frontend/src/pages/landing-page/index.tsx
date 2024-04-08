import { Hero, LandingBlack, LandingNavigationBar } from "@/components";
import { WhyBowalPay } from "@/containers";

const LandingPage = () => {
  return (
    <main>
      <LandingBlack />
      <LandingNavigationBar />
      <Hero />

      <WhyBowalPay />
    </main>
  );
};

export default LandingPage;
