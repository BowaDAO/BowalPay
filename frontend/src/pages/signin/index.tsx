import { LoginForm } from "@/components";
import { FormikHelpers } from "formik";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const initialFormValues: LoginFormType = {
  emailAddress: "",
  password: "",
};

const Signin = () => {
  const navigate = useNavigate();

  const LoginRequestFunction = async (formValue: LoginFormType) => {
    const res = await axios.post(
      "http://localhost:9000/api/v1/auth/login",
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
    LoginFormType
  >({
    mutationKey: ["login"],
    mutationFn: LoginRequestFunction,
    onSuccess: () => {
      navigate("/home");
    },
  });

  const login = async (
    values: LoginFormType,
    formikHelpers: FormikHelpers<LoginFormType>
  ) => {
    await mutateAsync(values);
    formikHelpers.resetForm();
  };

  return (
    <main>
      <LoginForm
        initialFormValues={initialFormValues}
        login={login}
        isError={isError}
        isPending={isPending}
        error={error}
      />
    </main>
  );
};

export default Signin;
