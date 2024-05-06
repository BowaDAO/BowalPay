import { LoginForm } from "@/components";
import { FormikHelpers } from "formik";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

const initialFormValues: LoginFormType = {
  email: "",
  password: "",
};

const Signin = () => {
  const LoginRequestFunction = async (formValue: LoginFormType) => {
    const res = await axios.post(
      "https://localhost:9000/api/v1/auth/login",
      formValue,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data;
  };

  const { data, error, isPending, mutateAsync } = useMutation<
    LoginResponse,
    AxiosError<AuthErrorResponse>,
    LoginFormType
  >({
    mutationKey: ["login"],
    mutationFn: LoginRequestFunction,
    onSuccess: () => {},
  });

  const login = async (
    values: LoginFormType,
    formikHelpers: FormikHelpers<LoginFormType>
  ) => {
    await mutateAsync(values);
    formikHelpers.resetForm();
  };

  console.log(data, error, isPending);

  return (
    <main>
      <LoginForm initialFormValues={initialFormValues} login={login} />
    </main>
  );
};

export default Signin;
