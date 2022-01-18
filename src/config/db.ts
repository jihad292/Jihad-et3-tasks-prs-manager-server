//this is where we set our connection to our database
// we used mysql2 instead of mysql because it use the Promise wraper instead of async await
import dotenv from "dotenv";
dotenv.config();
import mysql2 from "mysql2";

const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

const db = pool.promise();

export default db;
