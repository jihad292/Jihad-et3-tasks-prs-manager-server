"use strict";

import reduce from "../helpers/et3-type-guards/reduce";
import dbConnection from "./dbConnection";

type DataBase = "default" | "chat";

const dbAPI = {
  async queryGet<T>(query: string) {
    const rows = await dbConnection.query(query);
    return rows as T;
  },

  async queryExecute(query: string) {
    const rows = await dbConnection.query(query);
    const changedRows = reduce(() => rows.changedRows, 0);
    return changedRows > 0;
  }
};
export default dbAPI;
