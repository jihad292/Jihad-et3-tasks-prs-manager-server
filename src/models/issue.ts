import memoize from "lodash.memoize";
import { observable, runInAction } from "mobx";
import { queries } from "../constants";
import db from "../config/db";

export class IssueStoreImpl {
  id = observable.box<number>(0);
  comment = observable.box<string>("");
  link = observable.box<string>("");
  se = observable.box<string>("");
  platform = observable.box<string>("");
  size = observable.box<string>("");
  difficulty = observable.box<string>("");
  status = observable.box<string>("");
  version = observable.box<string>("");
  by_state = observable.box<number>();
  ah_state = observable.box<number>();
  ht_state = observable.box<number>();
  date = observable.box<string>("");

  async saveissue() {
    const [newIssue, _] = await db.execute(
      queries.createIssue(
        this.id.get(),
        this.comment.get(),
        this.link.get(),
        this.se.get(),
        this.platform.get(),
        this.size.get(),
        this.difficulty.get(),
        this.status.get(),
        this.version.get(),
        this.by_state.get(),
        this.ah_state.get(),
        this.ht_state.get(),
        this.date.get()
      )
    );
    return newIssue;
  }

  async findAll() {
    return db.query(queries.findAll);
  }

  async findById() {
    return db.query(queries.findById(this.id.get()));
  }

  async updateIssue() {
    const [issueUpdated, _] = await db.execute(
      queries.updateIssue(
        this.id.get(),
        this.comment.get(),
        this.link.get(),
        this.se.get(),
        this.platform.get(),
        this.size.get(),
        this.difficulty.get(),
        this.status.get(),
        this.version.get(),
        this.by_state.get(),
        this.ah_state.get(),
        this.ht_state.get(),
        this.date.get()
      )
    );
    return issueUpdated;
  }
}

export const IssueStore = memoize(
  () => {
    return new IssueStoreImpl();
  },
  () => 1
);

export default { IssueStore };
