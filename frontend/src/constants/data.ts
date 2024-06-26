import {
  FcBusinessContact,
  FcBusinessman,
  FcFilingCabinet,
  FcPlanner,
  FcViewDetails,
} from "react-icons/fc";

export const LOGIN_FORM = {
  email: {
    name: "emailAddress",
    id: "emailAddress",
    placeholder: "Email or Username",
    tooltip_id: "email-anchor",
    tooltip_content:
      "In most cases, this is the email address associated with your BowalPay account",
  },

  password: {
    name: "password",
    id: "password",
    placeholder: "Password",
  },

  forget_password: {
    to: "/forgot-password",
    link_label: "Forgot Password?",
  },

  new_user: {
    label: "New to BowalPay?",
    to: "/accounts",
    link_label: "Sign Up!",
  },
};

export const SIGNUP_FORM = {
  individual_account: {
    heading: "Individual",
    subheading: "My business isn't registered",
    name: "accountType",
    value: "individual",
    id: "accountType",
  },

  company_account: {
    heading: "Company",
    subheading: "Includes sole proprietorship, corporation, LLC",
    name: "accountType",
    value: "company",
    id: "accountType",
  },

  firstname: {
    name: "firstName",
    id: "firstName",
    placeholder: "First name",
    tooltip_id: "first-name-anchor",
    tooltip_content:
      "First name used in your government-issued ID, written in English characters. In case your name do contains digits, type digits in words.",
  },

  lastname: {
    name: "lastName",
    id: "lastName",
    placeholder: "Last name",
    tooltip_id: "last-name-anchor",
    tooltip_content:
      "Last name used in your government-issued ID, written in English characters. In case your name do contains digits, type digits in words.",
  },

  email: {
    name: "emailAddress",
    id: "emailAddress",
    placeholder: "Email or Username",
    tooltip_id: "email-anchor",
    tooltip_content:
      "This email address will be used to access your account and send you communications.",
  },

  confirm_email: {
    name: "confirmEmail",
    id: "confirmEmail",
    placeholder: "Re-enter email address",
  },

  dob: {
    name: "dateOfBirth",
    id: "dateOfBirth",
    placeholder: "Date of birth",
    tooltip_id: "date-of-birth-anchor",
    tooltip_content:
      "Date of birth as listed on your government-issued ID. You must be over 18 years old to apply.",
  },

  password: {
    name: "password",
    id: "password",
    placeholder: "Password",
  },

  confirm_password: {
    name: "confirmPassword",
    id: "confirmPassword",
    placeholder: "Confirm your Password",
  },

  old_user: {
    label: "Already have an account?",
    to: "/login",
    link_label: "Login",
  },
};

export const apiUrl = `${import.meta.env.VITE_API_URL}/api/v1`;

export const ACCOUNT_TYPE = {
  heading: "Choose the right BowalPay account type for your business needs",
  subheading: "Please select the option that describes you the best",
};

export const WHY_BOWALPAY = {
  heading: "Why do business with BowalPay?",
  subheading:
    "Cross-border payments can get complicated but we've made it our mission to uncomplicate them.",
};

export const accountTypes = [
  { icon: FcPlanner, label: "Freelancer or SMB" },
  { icon: FcViewDetails, label: "Online seller" },
  { icon: FcFilingCabinet, label: "Affiliate marketer" },
  { icon: FcBusinessContact, label: "Vacation rental host" },
  { icon: FcBusinessman, label: "Individual" },
];

export const blackBannerLinks = [
  {
    to: "/",
    label: "RESOURCES",
  },
  {
    to: "/",
    label: "DEVELOPERS API",
  },
  {
    to: "/",
    label: "ABOUT US",
  },
];
