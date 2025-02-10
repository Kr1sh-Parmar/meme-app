import * as express from "express";
import {
  createMeme,
  deleteMeme,
  getMemeById,
  getMemes,
  toggleLike,
} from "../controller/memeController.js";
import { authenticate } from "../middlewares/authentication.js";
import multer from "multer";

const memesRouter = express.Router();

const upload = multer({ dest: "uploads/" });

/**
 * This route will be available at http://localhost:3000/memes/getAllMemes
 * This route will return all memes from the MongoDB database
 * */
memesRouter.get("/getAllMemes", getMemes);

memesRouter.get("/getMemeById/:id", getMemeById);

memesRouter.post(
  "/createMeme",
  authenticate,
  upload.single("file"),
  createMeme
);

memesRouter.post("/toggleLike", authenticate,toggleLike);

// TODO: Add a route to add a comment to a meme
// memesRouter.post("/addComment", authenticate, addComment);

memesRouter.delete("/deleteMeme", authenticate, deleteMeme);

export default memesRouter;
