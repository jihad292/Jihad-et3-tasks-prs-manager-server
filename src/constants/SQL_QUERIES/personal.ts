import { IssueObject } from "../../helpers/et3-type-guards/types";

const personalQueries = {
  getIssues: (): string => {
    const query: string = `SELECT * FROM et3test.pr_issue where (is_deleted = 0) LIMIT 20;`;
    return query;
  },

  getIssueById: (id: number): string => {
    return `select * from et3test.pr_issue where ( (is_deleted = 0) and issue_id = ${id} );`;
  },

  createIssue: (issue: IssueObject): string => {
    return `INSERT INTO pr_issue
    (issue_id,comment,link,se,platform,size,difficulty,status,version,by_state,ah_state,ht_state,date,is_deleted) 
      VALUES(
          '${issue.issue_id}',
          '${issue.comment}',
          '${issue.link}',
          '${issue.se}',
          '${issue.platform}',
          '${issue.size}',
          '${issue.difficulty}',
          '${issue.status}',
          '${issue.version}',
          '${issue.by_state}',
          '${issue.ah_state}',
          '${issue.ht_state}',
          '${issue.date}',
          '${issue.is_deleted}'
      );`;
  },

  updateIssue: (issue: IssueObject): string => {
    return `UPDATE et3test.pr_issue SET 

    comment = '${issue.comment}', 
    link = '${issue.link}',
    se = '${issue.se}',
    platform = '${issue.platform}',
    size = '${issue.size}',
    difficulty = '${issue.difficulty}',
    status = '${issue.status}',
    version = '${issue.version}',
    by_state = '${issue.by_state}',
    ah_state =  '${issue.ah_state}',
    ht_state = '${issue.ht_state}',
    date = '${issue.date}'
    
    WHERE (issue_id = ${issue.issue_id});`;
  },

  deleteIssue: (issue_id: number): string => {
    return `UPDATE et3test.pr_issue SET is_deleted = '1' WHERE (issue_id = ${issue_id});`;
  },
};

export default personalQueries;
