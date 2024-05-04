import { NextFunction, Request, Response } from "express";
import { validateForm } from "../middlewares/validateForm";
import { RegisterFormSchema } from "../utilities/validationSchemas";
import { pool } from "../configurations/database";
import { createNewUserQuery, userExistsQuery } from "../utilities/queries";
import StatusCodes from "http-status-codes";
import * as bcrypt from "bcrypt";

const register = async (req: Request, res: Response, next: NextFunction) => {
  const {
    firstName,
    lastName,
    emailAddress,
    password: passwordFromBody,
    dateOfBirth,
    accountType,
  } = req.body;

  validateForm(req, res, next, RegisterFormSchema);

  try {
    const userExists = await pool.query(userExistsQuery, [emailAddress]);

    if (userExists.rowCount && userExists.rowCount > 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        loggedIn: false,
        message: "User already exists, please sign in.",
      });
    } else {
      const password = await bcrypt.hash(passwordFromBody, 10);

      const newUser = await pool.query(createNewUserQuery, [
        firstName,
        lastName,
        emailAddress,
        password,
        dateOfBirth,
        accountType,
      ]);
    }
  } catch (error) {}
};

const login = async (req: Request, res: Response) => {
  res.json({ message: "Successful" });
};

export { register, login };
