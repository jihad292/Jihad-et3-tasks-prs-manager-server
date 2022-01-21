 export type IssueObject = {
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
  };