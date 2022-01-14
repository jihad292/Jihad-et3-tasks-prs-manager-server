const Issue = require("../models/Issue");

exports.getAllIssues = async (req, res, next) => {
  try {
    const [issues, _] = await Issue.findAll();
    res.status(200).json({ count: issues.length, issues }); // the count helps us to count how many issues we have in our database
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.createNewIssue = async (req, res, next) => {
  try {
    let {
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
      date,
    } = req.body;
    let issue = new Issue(
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
    );
    issue = await issue.saveIssue();
    res.status(201).json({ message: "Issue created" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.getIssueById = async (req, res, next) => {
  try {
    let issueId = req.params.id;
    let [issue, _] = await Issue.findById(issueId);
    res.status(200).json({ issue: issue[0] });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
