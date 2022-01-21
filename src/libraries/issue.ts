"use strict";

import issueModel from "../models/issue";

const issueLibrary = {
  async getIssues() {
    const issue = await issueModel.getIssues();
    const filterListIssue = issue.filter((e) => {
      return e.is_deleted === 0;
      
    });
    return { filterListIssue };
  },
};

export default issueLibrary;
