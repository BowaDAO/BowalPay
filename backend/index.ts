const express = require("express");
const app = express();
import { Request, Response } from "express";

app.use("/", (req: Request, res: Response) => {
  return res.json({ message: "Loading..." });
});

const port = 9000;

app.listen(port, () => {
  console.log(`app is listening in port-${port}`);
});
