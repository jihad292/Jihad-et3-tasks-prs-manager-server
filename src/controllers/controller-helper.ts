import { IssueStore } from "../models/issue";
import { Request } from "express";

export const parametersSetters = (req: Request) => {
  let {
    id,
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
  IssueStore().id.set(id);
  IssueStore().comment.set(comment);
  IssueStore().link.set(link);
  IssueStore().se.set(se);
  IssueStore().platform.set(platform);
  IssueStore().size.set(size);
  IssueStore().difficulty.set(difficulty);
  IssueStore().status.set(status);
  IssueStore().version.set(version);
  IssueStore().by_state.set(by_state);
  IssueStore().ah_state.set(ah_state);
  IssueStore().ht_state.set(ht_state);
  IssueStore().date.set(date);
};

export const resetIssueParameters = () => {
  IssueStore().id.set(0);
  IssueStore().comment.set("");
  IssueStore().link.set("");
  IssueStore().se.set("");
  IssueStore().platform.set("");
  IssueStore().size.set("");
  IssueStore().difficulty.set("");
  IssueStore().status.set("");
  IssueStore().version.set("");
  IssueStore().by_state.set(0);
  IssueStore().ah_state.set(0);
  IssueStore().ht_state.set(0);
  IssueStore().date.set("");
};
