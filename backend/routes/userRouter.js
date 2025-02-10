import express from "express";
import { addUser, loginUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/addUser", addUser);

userRouter.post("/loginUser", loginUser);

export default userRouter;