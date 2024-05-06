type LoginFormType = {
  email: string;
  password: string;
};

type LoginResponse = {
  loggedIn: boolean;
  token: string;
};

type AuthErrorResponse = {
  loggedIn: boolean;
  message: string;
};