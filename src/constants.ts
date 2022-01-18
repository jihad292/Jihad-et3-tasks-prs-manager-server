export const queries = {
  createIssue: (
    id: number,
    comment: string,
    link: string,
    se: string,
    platform: string,
    size: string,
    difficulty: string,
    status: string,
    version: string,
    by_state: number,
    ah_state: number,
    ht_state: number,
    date: string
  ): string => {
    const query = 
    `INSERT INTO pr_issue(issue_id,comment,link,se,platform,size,difficulty,status,version,by_state,ah_state,ht_state,date) VALUES(
            '${id}',
            '${comment}',
            '${link}',
            '${se}',
            '${platform}',
            '${size}',
            '${difficulty}',
            '${status}',
            '${version}',
            '${by_state}',
            '${ah_state}',
            '${ht_state}',
            '${date}'
        );`;
    return query;
  },
  findAll  : `SELECT * FROM pr_issue;`,

  findById : (id : number) : string=>{
    const query = `SELECT * FROM pr_issue WHERE issue_id =  ${id}`;
    return query;
  },

   updateIssue : (id: number,
    comment: string,
    link: string,
    se: string,
    platform: string,
    size: string,
    difficulty: string,
    status: string,
    version: string,
    by_state: number,
    ah_state: number,
    ht_state: number,
    date: string) : string =>{
    let query = `UPDATE et3test.pr_issue SET 

    comment = '${comment}', 
    link = '${link}',
    se = '${se}',
    platform = '${platform}',
    size = '${size}',
    difficulty = '${difficulty}',
    status = '${status}',
    version = '${version}',
    by_state = '${by_state}',
    ah_state =  '${ah_state}',
    ht_state = '${ht_state}',
    date = '${date}'
    
    WHERE (issue_id = ${id});`;

    return query;
  }
  
};
