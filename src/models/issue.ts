import personalQueries from "../constants/SQL_QUERIES/personal";
import dbAPI from "../system/dbAPI";
import dbConnection from "../system/dbConnection";

const issueModel = {
  async getIssues() {
    const query = personalQueries.getIssues();
    return await dbAPI.queryGet<
      {
        issue_id: number;
        comment: string;
        link: string;
        se: string;
        platform: string;
        size: string;
        difficulty: string;
        status: string;
        version: string;
        by_state: number;
        ah_state: number;
        ht_state: number;
        date: Date;
        is_deleted: number;
      }[]
    >(query);
  },
};

export default issueModel;
