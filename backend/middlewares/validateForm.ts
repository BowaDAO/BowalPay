import { Request, Response, NextFunction } from "express";
import Yup from "yup";

export const validateForm = (
  req: Request,
  res: Response,
  next: NextFunction,
  formSchema: Yup.ObjectSchema<{}, Yup.AnyObject, {}, "">
) => {
  const formData = req.body;

  formSchema
    .validate(formData)
    .catch((error) => {
      res.status(422).send(error.errors[0]);
    })
    .then((valid) => {
      if (valid) {
        next();
      } else {
        res.status(422).send("Invalid form input");
      }
    });
};
