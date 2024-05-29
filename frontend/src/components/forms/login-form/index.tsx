import { AuthButton } from "@/components/buttons";
import CustomError from "@/components/custom-error";
import Logo from "@/components/logo";
import { TextField, PasswordField } from "@/components/fields";
import { InfoTooltip } from "@/components/tooltips";
import { loginFormValidationSchema } from "@/utilities/validations";
import { AxiosError } from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { LOGIN_FORM } from "@/constants/data";

type Props = {
  initialFormValues: LoginFormType;
  login: (
    values: LoginFormType,
    formikHelpers: FormikHelpers<LoginFormType>
  ) => Promise<void>;
  error: AxiosError<AuthErrorResponse> | null;
  isPending: boolean;
  isError: boolean;
};

const LoginForm = (props: Props) => {
  return (
    <div className="flex h-screen">
      <div className="flex_col_justify_between w-[35%] pt-12 pb-3 h-full shadow-lg">
        <div className="flex_col_center gap-16">
          <Logo />

          <Formik
            initialValues={props.initialFormValues}
            onSubmit={props.login}
            validationSchema={loginFormValidationSchema}
            validateOnBlur
          >
            {(formik) => (
              <Form className="flex_col gap-8">
                <span className="flex items-center gap-2 relative">
                  <TextField
                    name={LOGIN_FORM.email.name}
                    id={LOGIN_FORM.email.id}
                    type="email"
                    placeholder={LOGIN_FORM.email.placeholder}
                    labelVisible={formik.values.emailAddress.length > 0}
                    extraClasses="w-[360px]"
                    autoComplete="off"
                  />

                  <span className="absolute right-2 top-4">
                    <InfoTooltip
                      id={LOGIN_FORM.email.tooltip_id}
                      content={LOGIN_FORM.email.tooltip_content}
                    />
                  </span>
                </span>

                <span className="flex_col gap-2">
                  <PasswordField
                    labelVisible={formik.values.password.length > 0}
                    name={LOGIN_FORM.password.name}
                    id={LOGIN_FORM.password.id}
                    placeholder={LOGIN_FORM.password.placeholder}
                    extraClasses="w-[360px]"
                  />

                  <Link
                    to={LOGIN_FORM.forget_password.to}
                    className="text-blue font-semibold"
                  >
                    {LOGIN_FORM.forget_password.link_label}
                  </Link>
                </span>

                <span className="flex_col_center gap-2">
                  <AuthButton
                    label={props.isPending ? "Signing In..." : "Sign In"}
                    extraClasses="w-[360px]"
                    disabled={props.isPending}
                  />

                  <span className="font-semibold">
                    {LOGIN_FORM.new_user.label}{" "}
                    <Link to={LOGIN_FORM.new_user.to} className="text-blue">
                      {LOGIN_FORM.new_user.link_label}
                    </Link>
                  </span>

                  <CustomError message={props.error?.response?.data.message} />
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
    </div>
  );
};

export default LoginForm;
