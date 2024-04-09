import * as Yup from "yup";

export const registerFormValidationSchema = Yup.object({
  firstName: Yup.string().required("The first name field is required."),
  lastName: Yup.string().required("The last name field is required."),
  email: Yup.string()
    .required("The email field is required.")
    .email("That is not a valid email format."),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email")], "Email does not match.")
    .required("The email field is required."),
  password: Yup.string()
    .required("The password field is required.")
    .min(8, "Password should be at least 8 characters."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match.")
    .required("The confirm password field is required."),
  businessType: Yup.string().required("Select your type of business."),
  dateOfBirth: Yup.date().required("Date of birth is required."),
});
