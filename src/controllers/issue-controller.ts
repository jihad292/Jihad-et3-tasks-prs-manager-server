import { IssueStore } from "../models/issue";
import { Request, Response, NextFunction } from "express";

export const issueController = {
  getAllIssues: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const [issues, _] = await IssueStore().findAll();
      res.status(200).json({ issues });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  getIssueById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let issueId = req.params.id;
      IssueStore().id.set(1235);
      console.log(issueId)
      let [issue, _] = await IssueStore().findById();
      res.status(200).json({ issue });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  
};
