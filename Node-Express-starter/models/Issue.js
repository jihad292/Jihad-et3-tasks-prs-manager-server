// this class will help us to create a post and on that post we can call different database methods

const db = require("../config/db");

class Issue {
  constructor(
    id,
    comment,
    link,
    se,
    platform,
    size,
    difficulty,
    status,
    version,
    by_state,
    ah_state,
    ht_state,
    date
  ) {
    (this.id = id),
      (this.comment = comment),
      (this.link = link),
      (this.se = se),
      (this.platform = platform),
      (this.size = size),
      (this.difficulty = difficulty),
      (this.status = status),
      (this.version = version),
      (this.by_state = by_state),
      (this.ah_state = ah_state),
      (this.ht_state = ht_state),
      (this.date = date);
  }

  async saveIssue() {
    let sql = `INSERT INTO pr_issue(issue_id,comment,link,se,platform,size,difficulty,status,version,by_state,ah_state,ht_state,date) VALUES(
          '${this.id}',
          '${this.comment}',
          '${this.link}',
          '${this.se}',
          '${this.platform}',
          '${this.size}',
          '${this.difficulty}',
          '${this.status}',
          '${this.version}',
          '${this.by_state}',
          '${this.ah_state}',
          '${this.ht_state}',
          '${this.date}'
      )`;

    const [newIssue, _] = await db.execute(sql); //we used _ in place of the res in call back function
    return newIssue;
  }

  // we used static so that we can use this method directly without creating an object from this class.
  // we can use it by Post.findAll .  this object oriented programing like Java language
  static findAll() {
    let sql = `SELECT * FROM pr_issue;`;
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM pr_issue WHERE issue_id =  ${id}`;
    return db.execute(sql);
  }

  async updateIssue() {
    let sql = `UPDATE et3test.pr_issue SET 

      comment = '${this.comment}', 
      link = '${this.link}',
      se = '${this.se}',
      platform = '${this.platform}',
      size = '${this.size}',
      difficulty = '${this.difficulty}',
      status = '${this.status}',
      version = '${this.version}',
      by_state = '${this.by_state}',
	    ah_state =  '${this.ah_state}',
    	ht_state = '${this.ht_state}',
	    date = '${this.date}'
      
      WHERE (issue_id = ${this.id});`;
    const [issueUpdated, _] = await db.execute(sql);
    return issueUpdated;
  }

  static deleteById(id) {
    let sql = `DELETE FROM et3test.pr_issue WHERE (issue_id = ${id});`;
    return db.execute(sql);
  }
}

module.exports = Issue;
