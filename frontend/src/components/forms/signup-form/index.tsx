import { BusinessTypeRadio, Divider, TextField } from "@/components";
import { registerFormValidationSchema } from "@/utilities/validations";
import { Formik } from "formik";
import { Form } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-3xl text-blue font-normal">BowalPay Sign Up</h3>

      <Formik
        initialValues={{ name: "" }}
        onSubmit={() => {}}
        validationSchema={registerFormValidationSchema}
      >
        <Form className="w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h6 className="text-sm text-black">Select your type of business</h6>

            <span className="flex flex-col gap-2">
              <BusinessTypeRadio
                heading="Individual"
                subheading="My business isn't registered"
                name="businessType"
                value=""
              />
              <BusinessTypeRadio
                heading="Company"
                subheading="Includes sole proprietorship, corporation, LLC"
                name="businessType"
                value=""
              />
            </span>
          </div>

          <Divider />

          <div className="flex flex-col gap-5">
            <h6 className="text-sm text-black">
              Please fill in the fields in English characters only
            </h6>

            <span className="flex flex-col gap-6">
              <TextField
                name="firstName"
                id="firstName"
                type="text"
                placeholder="First name"
              />

              <TextField
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Last name"
              />

              <TextField
                name="email"
                id="email"
                type="email"
                placeholder="Email address"
              />

              <TextField
                name="confirmEmail"
                id="confirmEmail"
                type="email"
                placeholder="Re-enter email address"
              />

              <TextField
                name="dateOfBirth"
                id="dateOfBirth"
                type="date"
                placeholder="Date of birth"
              />

              <TextField
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
              />

              <TextField
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
            </span>
          </div>

          <p className="text-sm text-chalk font-normal">
            By clicking "Sign Up", you confirm that you have read and understood
            the payoneer{" "}
            <span className="text-blue underline">Privacy & Policy</span>, and
            agree to itd terms.{" "}
          </p>

          <button
            type="submit"
            className="py-4 px-12 rounded-lg self-start button-background text-xl font-semibold text-white"
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
