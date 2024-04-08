import { Routes, Route } from "react-router-dom";
import { Accounts, LandingPage, Signin, Signup } from "@/pages";
import { RegisterLayout } from "@/layouts";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<RegisterLayout />}>
        <Route path="accounts" element={<Accounts />} />

        <Route path="register" element={<Signup />} />

        <Route path="login" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default Routing;
