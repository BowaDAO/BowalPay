type LoginFormType = {
  emailAddress: string;
  password: string;
};

type RegisterFormType = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  dateOfBirth: Date | null;
};

type LoginResponse = {
  loggedIn: boolean;
  token: string;
};

type AuthErrorResponse = {
  loggedIn: boolean;
  message: string;
};
