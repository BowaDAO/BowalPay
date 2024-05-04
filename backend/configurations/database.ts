import { Pool } from "pg";

export const pool = new Pool({
  database: process.env.DATABASE_NAME,
  user: process.env.DATBASE_USER,
  host: process.env.DATBASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
});
