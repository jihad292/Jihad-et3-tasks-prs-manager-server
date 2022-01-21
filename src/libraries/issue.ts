"use strict";

import issueModel from "../models/issue";

const issueLibrary = {
  async getIssues() {
    const issue = await issueModel.getIssues();
    const filterListI18n = issue.filter((e) => {
      return (
        e.id_issue,
        e.comment,
        e.link,
        e.se,
        e.platform,
        e.size,
        e.difficulty,
        e.status,
        e.version,
        e.by_state,
        e.ah_state,
        e.ht_state,
        e.date,
        e.is_deleted
      );
    });
    return { filterListI18n };
  },
};

export default issueLibrary;
