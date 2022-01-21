"use strict";

import issueModel from "../models/issue";

const issueLibrary = {
  async getIssues() {
    const issues = await issueModel.getIssues();
    const filterListIssue = issues.filter((e) => {
      return e.is_deleted === 0;
    });
    return { filterListIssue };
  },

  // this library file saved us lots of time and making files concerning get infos. from here we can get any info
  // without making hard MYSQL queries. For example if we want to find issue by id we don't have to make a query for it,
  // we can filter our array of datas according to his ID.
  //from here we can use multiple javascript great functions like filter map ... on main array without using queries MYSQL
  async getIssueById(id: number) {
    const issuesArray = await issueModel.getIssues();
    const issueById = issuesArray.filter((issue) => {
      return issue.issue_id === id;
    });
    return issueById;
  },
};

export default issueLibrary;
