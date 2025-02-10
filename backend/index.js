import express from "express";
import cors from "cors";
import "dotenv/config";
import memesRouter from "./routes/memesRouter.js";

import { initiateDBConnect } from "./common/mongoConnection.js";
import { logger } from "./middlewares/logger.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js";

const app = express();

// Connect to the database
initiateDBConnect();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type"]
  })
);

// app configs
app.use(express.json());

app.use(
  (req, res, next) =>{
    console.log(req.body)
    next()
  }
)

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(logger);

// Routes
app.use("/memes", memesRouter);
app.use("/user", userRouter);

app.listen(3030, () => {
  console.info("Express.js server is running on port 3030");
});
