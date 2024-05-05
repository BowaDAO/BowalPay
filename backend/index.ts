import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import AuthRouter from "./routes/auth";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", AuthRouter);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`app is listening in port-${port}`);
});
