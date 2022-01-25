import express, { Application, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import router from "./controllers";

const app: Application = express();

app.use(function (req, res: Response, next: NextFunction) {
  // we can set the accepted URL to fetch from server. * means that every URL is allowed
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /issues to issue-routes.ts
app.use("/issues", router);

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err: any, res: Response, next: NextFunction) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went realy wrong",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () =>
  console.log(`Express server listening on port ${PORT}`)
);
