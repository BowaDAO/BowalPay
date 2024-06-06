import { SignupForm } from "@/components";
import { apiUrl } from "@/constants/data";
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
  dateOfBirth: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const navigate = useNavigate();

  const RegisterRequestFunction = async (formValue: RegisterFormType) => {
    const res = await axios.post(`${apiUrl}/auth/register`, formValue, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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
    const userDob = new Date(values.dateOfBirth);
    userDob.setUTCHours(0, 0, 0, 0);

    const user = { ...values, dateOfBirth: userDob.toISOString() };

    await mutateAsync(user);
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
