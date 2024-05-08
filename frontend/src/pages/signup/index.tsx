import { SignupForm } from "@/components";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

const initialFormValues: RegisterFormType = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  confirmEmail: "",
  accountType: "",
  dateOfBirth: null,
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const navigate = useNavigate();

  const RegisterRequestFunction = async (formValue: RegisterFormType) => {
    const res = await axios.post(
      "http://localhost:9000/api/v1/auth/register",
      formValue,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data;
  };

  const { error, isPending, isError, mutateAsync } = useMutation<
    LoginResponse,
    AxiosError<AuthErrorResponse>,
    RegisterFormType
  >({
    mutationKey: ["register"],
    mutationFn: RegisterRequestFunction,
    onSuccess: () => {
      navigate("/home");
    },
  });

  const signup = async (
    values: RegisterFormType,
    formikHelpers: FormikHelpers<RegisterFormType>
  ) => {
    await mutateAsync(values);
    formikHelpers.resetForm();
  };

  return (
    <main className="px-[10%] py-10">
      <SignupForm
        initialFormValues={initialFormValues}
        isError={isError}
        isPending={isPending}
        error={error}
        signup={signup}
      />
    </main>
  );
};

export default Signup;
