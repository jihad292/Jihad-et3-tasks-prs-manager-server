import issueLibrary from "../libraries/issue";
import { Response, Request } from "express";
import issueModel from "../models/issue";
import valuesProvider from "./values-provider";

const issueController = {
  async getIssues({}, res: Response) {
    try {
      const issuesArray = await issueLibrary.getIssues();
      res.json(issuesArray.filterListIssue);
    } catch (error) {
      console.log(error);
    }
  },

  //here if we put in the parameters response before request the server can not read the id at all
  async getIssueById(req: Request, res: Response) {
    try {
      let issueId = req.params.id;
      const issueById = await issueLibrary.getIssueById(+issueId);
      res.json(issueById);
    } catch (error) {
      console.log(error);
    }
  },

  async createIssue(req: Request, res: Response) {
    try {
      await issueModel.createIssue(valuesProvider(req));
      res.status(201).json({ message: "Issue created" });
    } catch (error) {
      console.log(error);
    }
  },

  async updateIssue(req: Request, res: Response) {
    try {
      await issueModel.updateIssue(valuesProvider(req));
      res.status(202).json({ message: "Issue updated" });
    } catch (error) {
      console.log(error);
    }
  },

  async deleteIssue(req: Request, res: Response) {
    try {
      let issueToBeDeletedId = req.params.id;
      await issueModel.deleteIssue(+issueToBeDeletedId);
      res.status(203).json({ message: "Issue deleted" });
    } catch (error) {
      console.log(error);
    }
  },
};

export default issueController;
