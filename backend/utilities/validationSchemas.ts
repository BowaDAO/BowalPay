import Yup from "yup";

export const RegisterFormSchema = Yup.object({
  firstName: Yup.string().required("The first name field is required."),
  lastName: Yup.string().required("The last name field is required."),
  email: Yup.string()
    .required("The email field is required.")
    .email("That is not a valid email format."),
  password: Yup.string()
    .required("The password field is required.")
    .min(8, "Password should be at least 8 characters."),
  accountType: Yup.string().required("Select your business type."),
  dateOfBirth: Yup.date().required("Date of birth is required."),
});
