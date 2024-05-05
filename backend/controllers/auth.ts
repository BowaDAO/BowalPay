import { NextFunction, Request, Response } from "express";
import { validateForm } from "../middlewares/validateForm";
import {
  LoginFormSchema,
  RegisterFormSchema,
} from "../utilities/validationSchemas";
import { pool } from "../configurations/database";
import { createNewUserQuery, userExistsQuery } from "../utilities/queries";
import StatusCodes from "http-status-codes";
import * as bcrypt from "bcrypt";
import { jwtSign } from "../utilities/jwt";

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
    }

    const password = await bcrypt.hash(passwordFromBody, 10);

    const newUser = await pool.query(createNewUserQuery, [
      firstName,
      lastName,
      emailAddress,
      password,
      dateOfBirth,
      accountType,
    ]);

    jwtSign({ id: newUser.rows[0].id }, process.env.JWT_SECRET_TOKEN!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME!,
    })
      .then((token) => {
        res.json({ loggedIn: true, token });
      })
      .catch((error: Error) => {
        res.json({ loggedIn: false, error });
      });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      loggedIn: false,
      message: "Something went wrong, please try again.",
    });
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { emailAddress, password } = req.body;

  validateForm(req, res, next, LoginFormSchema);

  try {
    const userExists = await pool.query(userExistsQuery, [emailAddress]);

    if (userExists.rowCount && userExists.rowCount < 1) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ loggedIn: false, message: "user does not exist" });
    }

    const passwordIsCorrect = await bcrypt.compare(
      password,
      userExists.rows[0].password
    );

    if (!passwordIsCorrect) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ loggedIn: false, message: "Incorrect password" });
    }

    jwtSign({ id: userExists.rows[0].id }, process.env.JWT_SECRET_TOKEN!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME!,
    })
      .then((token) => {
        res.json({ loggedIn: true, token });
      })
      .catch((error: Error) => {
        res.json({ loggedIn: false, error });
      });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      loggedIn: false,
      message: "Something went wrong, please try again.",
    });
  }
};

export { register, login };
