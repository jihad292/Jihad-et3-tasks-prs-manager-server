import personalQueries from "../constants/SQL_QUERIES/personal";
import dbAPI from "../system/dbAPI";
import { IssueObject } from "../helpers/et3-type-guards/types";

const issueModel = {
  async getIssues() {
    const query = personalQueries.getIssues();
    return await dbAPI.queryGet<IssueObject[]>(query);
  },

  async getIssueById(issue_id: number) {
    const query = personalQueries.getIssueById(issue_id);
    return await dbAPI.queryGet<IssueObject>(query);
  },

  async createIssue(issueCreated: IssueObject) {
    const query = personalQueries.createIssue(issueCreated);
    return await dbAPI.queryExecute(query);
  },

  async updateIssue(issueUpdated: IssueObject) {
    const query = personalQueries.updateIssue(issueUpdated);
    return await dbAPI.queryExecute(query);
  },

  async deleteIssue(issue_id: number) {
    const query = personalQueries.deleteIssue(issue_id);
    return await dbAPI.queryExecute(query);
  },
};

export default issueModel;
