import { Hero, LandingNavigationBar } from "@/components";

const LandingPage = () => {
  return (
    <main>
      <LandingNavigationBar />

      <Hero />

      <div className="h-80"></div>
    </main>
  );
};

export default LandingPage;
