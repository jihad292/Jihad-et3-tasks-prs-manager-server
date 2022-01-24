"use strict";

import issueModel from "../models/issue";

const issueLibrary = {
  async getIssues() {
    const issues = await issueModel.getIssues();
    const filterListIssue = issues.filter((e) => {
      return e.issue_id !== 0;
    });
    return { filterListIssue };
  },
};

export default issueLibrary;
