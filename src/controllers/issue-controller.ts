import { IssueStore } from "../models/issue";
import { Request, Response, NextFunction } from "express";
import { parametersSetters, resetIssueParameters } from "./controller-helper";

export const issueController = {
  getAllIssues: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const [issues, _] = await IssueStore().findAll();
      res.status(200).json({ issues });
      resetIssueParameters();
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  getIssueById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let issueId = req.params.id;
      IssueStore().id.set(+issueId);
      let [issue, _] = await IssueStore().findById();
      res.status(200).json({ issue });
      resetIssueParameters();
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  createIssue: async (req: Request, res: Response, next: NextFunction) => {
    try {
      parametersSetters(req);
      await IssueStore().saveissue();
      res.status(201).json({ message: "Issue created" });
      resetIssueParameters();
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  updateIssue: async (req: Request, res: Response, next: NextFunction) => {
    try {
      parametersSetters(req);
      await IssueStore().updateIssue();
      res.status(201).json({ message: "Issue updated" });
      resetIssueParameters();
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  deleteIssue: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let issueId = req.body.issue_id;
      IssueStore().id.set(+issueId);
      await IssueStore().deleteIssue();
      res.status(200).json({ message: "Issue is deleted" });
      resetIssueParameters();
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};
