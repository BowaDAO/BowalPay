import {
  BusinessTypeRadio,
  Divider,
  QuestionMarkTooltip,
  TextField,
} from "@/components";
import { registerFormValidationSchema } from "@/utilities/validations";
import { Formik, Form } from "formik";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  businessType: "",
  dateOfBirth: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-3xl text-blue font-normal">BowalPay Sign Up</h3>

      <Formik
        initialValues={initialFormValues}
        onSubmit={() => {}}
        validationSchema={registerFormValidationSchema}
      >
        <Form className="lg:w-[45%] flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h6 className="text-sm text-black">Select your type of business</h6>

            <span className="flex flex-col gap-2">
              <BusinessTypeRadio
                heading="Individual"
                subheading="My business isn't registered"
                name="businessType"
                value="individual"
              />
              <BusinessTypeRadio
                heading="Company"
                subheading="Includes sole proprietorship, corporation, LLC"
                name="businessType"
                value="company"
              />
            </span>
          </div>

          <Divider />

          <div className="flex flex-col gap-5">
            <h6 className="text-sm text-black">
              Please fill in the fields in English characters only
            </h6>

            <span className="flex flex-col gap-6">
              <span className="flex items-center gap-2">
                <TextField
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="First name"
                />

                <QuestionMarkTooltip
                  id="first-name-anchor"
                  content="First name used in your government-issued ID, written in English characters. In case your name do contains digits, type digits in words."
                />
              </span>

              <span className="flex items-center gap-2">
                <TextField
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                />

                <QuestionMarkTooltip
                  id="last-name-anchor"
                  content="Last name used in your government-issued ID, written in English characters. In case your name do contains digits, type digits in words."
                />
              </span>

              <span className="flex items-center gap-2">
                <TextField
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email address"
                />

                <QuestionMarkTooltip
                  id="email-anchor"
                  content="This email address will be used to access your account and send you communications."
                />
              </span>

              <TextField
                name="confirmEmail"
                id="confirmEmail"
                type="email"
                placeholder="Re-enter email address"
              />

              <span className="flex items-center gap-2">
                <TextField
                  name="dateOfBirth"
                  id="dateOfBirth"
                  type="date"
                  placeholder="Date of birth"
                />

                <QuestionMarkTooltip
                  id="date-of-birth-anchor"
                  content="Date of birth as listed on your government-issued ID. You must be over 18 years old to apply."
                />
              </span>

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
