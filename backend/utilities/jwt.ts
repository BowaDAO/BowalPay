import jwt from "jsonwebtoken";

const jwtSign = (payload: any, secret: string, options: any) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, secret, options, (error, token) => {
      if (error) reject(error);
      resolve(token);
    });
  });

const jwtVerify = (payload: any, secret: string, options: any) =>
  new Promise((resolve, reject) => {
    jwt.verify(payload, secret, options, (error, token) => {
      if (error) reject(error);
      resolve(token);
    });
  });

export { jwtSign, jwtVerify };
