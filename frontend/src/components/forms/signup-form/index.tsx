import {
  BusinessTypeRadio,
  CustomError,
  Divider,
  PrivacyPolicyCheck,
} from "@/components";
import { TextField, PasswordField } from "@/components/fields";
import { QuestionMarkTooltip } from "@/components/tooltips";
import { AuthButton } from "@/components/buttons";
import { registerFormValidationSchema } from "@/utilities/validations";
import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { SIGNUP_FORM } from "@/constants/data";

type Props = {
  initialFormValues: RegisterFormType;
  signup: (
    values: RegisterFormType,
    formikHelpers: FormikHelpers<RegisterFormType>
  ) => Promise<void>;
  error: AxiosError<AuthErrorResponse> | null;
  isPending: boolean;
  isError: boolean;
};

const SignupForm = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 relative">
      <h3 className="text-3xl text-blue font-normal">BowalPay Sign Up</h3>

      <div className="absolute top-4 right-0">
        <span className="text-2xl font-extrabold italic tracking-wide">
          <h1> {SIGNUP_FORM.old_user.label} </h1>{" "}
          <Link to={SIGNUP_FORM.old_user.to} className="text-blue underline">
            {SIGNUP_FORM.old_user.link_label}
          </Link>
        </span>
      </div>

      <Formik
        initialValues={props.initialFormValues}
        onSubmit={props.signup}
        validationSchema={registerFormValidationSchema}
      >
        {(formik) => {
          return (
            <Form className="lg:w-[45%] flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h6 className="text-sm text-black">
                  Select your type of business
                </h6>

                <div className=" relative flex flex-col gap-3">
                  <BusinessTypeRadio
                    heading={SIGNUP_FORM.individual_account.heading}
                    subheading={SIGNUP_FORM.individual_account.subheading}
                    name={SIGNUP_FORM.individual_account.name}
                    value={SIGNUP_FORM.individual_account.value}
                    id={SIGNUP_FORM.individual_account.id}
                  />

                  <BusinessTypeRadio
                    heading={SIGNUP_FORM.company_account.heading}
                    subheading={SIGNUP_FORM.company_account.subheading}
                    name={SIGNUP_FORM.company_account.name}
                    value={SIGNUP_FORM.company_account.value}
                    id={SIGNUP_FORM.company_account.id}
                  />

                  <ErrorMessage
                    name="accountType"
                    component="div"
                    id="accountType"
                    className="text-red-700 text-xs font-semibold md:text-sm absolute -bottom-4"
                  />
                </div>
              </div>

              <Divider />

              <div className="flex flex-col gap-5">
                <h6 className="text-sm text-black">
                  Please fill in the fields in English characters only
                </h6>

                <span className="flex flex-col gap-8">
                  <span className="flex items-center gap-2">
                    <TextField
                      name={SIGNUP_FORM.firstname.name}
                      id={SIGNUP_FORM.firstname.id}
                      type="text"
                      placeholder={SIGNUP_FORM.firstname.placeholder}
                      labelVisible={formik.values.firstName.length > 0}
                      extraClasses="w-[430px]"
                    />

                    <QuestionMarkTooltip
                      id={SIGNUP_FORM.firstname.tooltip_id}
                      content={SIGNUP_FORM.firstname.tooltip_content}
                    />
                  </span>

                  <span className="flex items-center gap-2">
                    <TextField
                      name={SIGNUP_FORM.lastname.name}
                      id={SIGNUP_FORM.lastname.id}
                      type="text"
                      placeholder={SIGNUP_FORM.lastname.placeholder}
                      labelVisible={formik.values.lastName.length > 0}
                      extraClasses="w-[430px]"
                    />

                    <QuestionMarkTooltip
                      id={SIGNUP_FORM.lastname.tooltip_id}
                      content={SIGNUP_FORM.lastname.tooltip_content}
                    />
                  </span>

                  <span className="flex items-center gap-2">
                    <TextField
                      name={SIGNUP_FORM.email.name}
                      id={SIGNUP_FORM.email.id}
                      type="email"
                      placeholder={SIGNUP_FORM.email.placeholder}
                      labelVisible={formik.values.emailAddress.length > 0}
                      extraClasses="w-[430px]"
                    />

                    <QuestionMarkTooltip
                      id={SIGNUP_FORM.email.tooltip_id}
                      content={SIGNUP_FORM.email.tooltip_content}
                    />
                  </span>

                  <TextField
                    name={SIGNUP_FORM.confirm_email.name}
                    id={SIGNUP_FORM.confirm_email.id}
                    type="email"
                    placeholder={SIGNUP_FORM.confirm_email.placeholder}
                    labelVisible={formik.values.confirmEmail.length > 0}
                    extraClasses="w-[430px]"
                  />

                  <span className="flex items-center gap-2">
                    <TextField
                      name={SIGNUP_FORM.dob.name}
                      id={SIGNUP_FORM.dob.id}
                      type="date"
                      placeholder={SIGNUP_FORM.dob.placeholder}
                      labelVisible={Boolean(formik.values.dateOfBirth)}
                      extraClasses="w-[430px]"
                    />

                    <QuestionMarkTooltip
                      id={SIGNUP_FORM.dob.tooltip_id}
                      content={SIGNUP_FORM.dob.tooltip_content}
                    />
                  </span>

                  <PasswordField
                    name={SIGNUP_FORM.password.name}
                    id={SIGNUP_FORM.password.id}
                    placeholder={SIGNUP_FORM.password.placeholder}
                    labelVisible={formik.values.password.length > 0}
                    extraClasses="w-[430px]"
                  />

                  <PasswordField
                    name={SIGNUP_FORM.confirm_password.name}
                    id={SIGNUP_FORM.confirm_password.id}
                    placeholder={SIGNUP_FORM.confirm_password.placeholder}
                    labelVisible={formik.values.confirmPassword.length > 0}
                    extraClasses="w-[430px]"
                  />
                </span>
              </div>

              <PrivacyPolicyCheck />

              <AuthButton label="Sign Up" />

              <CustomError message={props.error?.response?.data.message} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignupForm;
