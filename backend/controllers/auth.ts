import { Request, Response } from "express";
import {
  LoginFormSchema,
  RegisterFormSchema,
} from "../utilities/validationSchemas";
import { pool } from "../configurations/database";
import { createNewUserQuery, userExistsQuery } from "../utilities/queries";
import StatusCodes from "http-status-codes";
import * as bcrypt from "bcrypt";
import { jwtSign } from "../utilities/jwt";
import { ValidationError } from "yup";

const register = async (req: Request, res: Response) => {
  const {
    firstName: first_name,
    lastName: last_name,
    emailAddress: email_address,
    dateOfBirth: date_of_birth,
    accountType: account_type,
  } = req.body;

  try {
    await RegisterFormSchema.validate(req.body, { abortEarly: false });

    const userExists = await pool.query(userExistsQuery, [email_address]);

    if (userExists.rowCount !== 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        loggedIn: false,
        message: "User already exists, please sign in.",
      });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const newUser = await pool.query(createNewUserQuery, [
      first_name,
      last_name,
      email_address,
      password,
      date_of_birth,
      account_type,
    ]);

    jwtSign({ id: newUser.rows[0].id }, process.env.JWT_SECRET_TOKEN!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME!,
    })
      .then((token) => {
        res.json({
          loggedIn: true,
          token,
        });
      })
      .catch((error: Error) => {
        res.json({ loggedIn: false, error });
      });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: error.errors[0] });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      loggedIn: false,
      message: "Something went wrong, please try again.",
    });
  }
};

const login = async (req: Request, res: Response) => {
  const { emailAddress: email_address, password } = req.body;

  try {
    await LoginFormSchema.validate(req.body, { abortEarly: false });

    const userExists = await pool.query(userExistsQuery, [email_address]);

    if (userExists.rowCount === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ loggedIn: false, message: "User does not exist" });
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
    if (error instanceof ValidationError) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ loggedIn: false, message: error.errors[0] });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      loggedIn: false,
      message: "Something went wrong, please try again.",
    });
  }
};

const handleSession = async (req: Request, res: Response) => {};

export { register, login, handleSession };
