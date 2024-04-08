import { Routes, Route } from "react-router-dom";
import { Accounts, LandingPage } from "@/pages";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/accounts" element={<Accounts />} />
    </Routes>
  );
};

export default Routing;
