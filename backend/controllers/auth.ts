import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  res.json({ message: "Successful" });
};

export { register };
