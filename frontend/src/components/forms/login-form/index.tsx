import { AuthButton } from "@/components/buttons";
import Logo from "@/components/logo";
import TextField from "@/components/text-field";
import { InfoTooltip } from "@/components/tooltips";
import { loginFormValidationSchema } from "@/utilities/validations";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <main className="flex h-screen">
      <div className="flex_col_justify_between w-[35%] pt-12 pb-3 h-full shadow-lg">
        <div className="flex_col_center gap-16">
          <Logo />

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={() => {}}
            validationSchema={loginFormValidationSchema}
            validateOnBlur
          >
            {(formik) => (
              <Form className="flex_col gap-8">
                <span className="flex items-center gap-2">
                  <TextField
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email or Username"
                    labelVisible={formik.values.email.length > 0}
                    extraClasses="w-[360px]"
                    autoComplete="off"
                  />

                  <InfoTooltip
                    id="email-anchor"
                    content="In most cases, this is the email address associated with your Payoneer account"
                  />
                </span>

                <span className="flex_col gap-2">
                  <TextField
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    labelVisible={formik.values.password.length > 0}
                    extraClasses="w-[360px]"
                    autoComplete="off"
                  />

                  <Link
                    to="forgot-password"
                    className="text-blue font-semibold"
                  >
                    Forgot password?
                  </Link>
                </span>

                <span className="flex_col_center gap-2">
                  <AuthButton
                    label="Sign In"
                    extraClasses="w-[360px]"
                    onClick={() => {}}
                  />
                  <span className="font-semibold">
                    New to BowalPay?
                    <Link to="register" className="text-blue">
                      {" "}
                      Sign Up!
                    </Link>
                  </span>
                </span>
              </Form>
            )}
          </Formik>
        </div>

        <span className="text-sm font-semibold">
          &#169; 2023 - 2024 BowalPay Inc. | Contact Us | English{" "}
        </span>
      </div>

      <div className="w-[65%]"></div>
    </main>
  );
};

export default LoginForm;
