import { Hero, LandingBlack, LandingNavigationBar } from "@/components";

const LandingPage = () => {
  return (
    <main>
      <LandingBlack />
      <LandingNavigationBar />
      <Hero />

      <div className="h-80"></div>
    </main>
  );
};

export default LandingPage;
