import TextField from "@/components/text-field";
import { Form, Formik } from "formik";

const LoginForm = () => {
  return (
    <div>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={() => {}}>
        {(formik) => (
          <Form className="flex flex-col gap-6">
            <TextField
              name="email"
              id="email"
              type="email"
              placeholder="Email address"
              labelVisible={formik.values.email.length > 0}
              extraClasses="w-[430px]"
            />

            <TextField
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              labelVisible={formik.values.password.length > 0}
              extraClasses="w-[430px]"
              autoComplete="off"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
