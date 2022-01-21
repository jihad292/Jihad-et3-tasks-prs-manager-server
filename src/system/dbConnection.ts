"use strict";
import mysql from "mysql2/promise";
import config from "../config/keys";
import { isNullOrUndefined } from "../helpers/et3-type-guards";

const configDB = config.mysql();
let instance_default: any = null;
const dbConnection = {
  getDataBase() {
    if (instance_default === null) {
      try {
        const pool = mysql.createPool(configDB);
        instance_default = pool;
      } catch (exception) {
        console.log(exception);
      }
    }
    return instance_default;
  },
  async query(query: any) {
    let connection = null;
    try {
      const pool = this.getDataBase();
      if (isNullOrUndefined(pool)) {
        console.log("Connection failed");
        return;
      }
      connection = await pool;
      const [rows] = await connection.query(query);
      // connection.release();
      return rows;
    } catch (exception) {
      if (!isNullOrUndefined(connection)) {
        connection.release();
      }
      console.log(exception);
    }
  },
};
export default dbConnection;
