import { Request } from "express";
import { IssueObject } from "../helpers/et3-type-guards/types";

const valuesProvider = (req: Request): IssueObject => {
  let {
    issue_id,
    comment,
    link,
    se,
    platform,
    size,
    difficulty,
    status,
    version,
    by_state,
    ah_state,
    ht_state,
    date,
  } = req.body;
  let issue: IssueObject = {
    issue_id,
    comment,
    link,
    se,
    platform,
    size: size,
    difficulty,
    status,
    version,
    by_state,
    ah_state,
    ht_state,
    date,
    is_deleted: 0,
  };
  return issue;
};

export default valuesProvider;
