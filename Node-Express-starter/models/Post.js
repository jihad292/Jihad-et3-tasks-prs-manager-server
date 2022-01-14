// this class will help us to create a post and on that post we can call different database methods

const db = require("../config/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1; // we added 1 because the month in java script is 0 index. December is 11 in javascript
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `INSERT INTO posts(title,body,created_at) VALUES(
          '${this.title}',
          '${this.body}',
          '${createdAtDate}'
      )`;

    const [newPost, _] = await db.execute(sql); //we used _ in place of the res in call back function
    return newPost;
  }

  // we used static so that we can use this method directly without creating an object from this class.
  // we can use it by Post.findAll .  this object oriented programing like Java language
  static findAll() {
    let sql = `SELECT * FROM posts;`;
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id =  ${id}`;
    return db.execute(sql);
  }
}

module.exports = Post;
