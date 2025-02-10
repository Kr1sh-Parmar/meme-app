import cloudinary from "../common/cloudinary.js";
import Meme from "../models/meme.js";
import User from "../models/user.js";

/**
 * This function will return all memes from the MongoDB database
 * @param {import("express").Request} req - The request object
 * @param {import("express").Response} res - The response object
 * Method: GET
 */
export const getMemes = async (req, res) => {
  try {
    const memes = await Meme.find()
      .populate("author")
      .populate("comments")
      .lean();
    res.status(200).json(memes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 * This function will create a new meme
 * @param {import("express").Request} req - The request object
 * @param {import("express").Response} res - The response object
 *
 * The request object should contain the following fields:
 * - title: The title of the meme
 * - file: The image file of the meme
 * 
 * Method: POST
 */

export const createMeme = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const { title } = req.body;
    const user = req.user; // Set from authentication middleware

    if (!title || !req.file) {
      return res.status(400).json({ message: "Required fields are not set" });
    }

    // Upload file to Cloudinary (await is necessary!)
    const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
      folder: `memes/${user._id}`,
    });

    // Save meme to DB
    const newMeme = await Meme.create({
      title,
      imageUrl: uploadedImage.secure_url,
      imageId: uploadedImage.public_id,
      author: user._id,
    });

    // Update user's meme list
    await User.updateOne({ _id: user._id }, { $push: { memes: newMeme._id } });

    res.status(201).json({ message: "Meme added successfully", meme: newMeme });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Failed to add meme: ${error.message}` });
  }
};
/**
 * Toggle like on a meme for a given user
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 *
 * The request object should contain the following fields:
 * - memeId: The ID of the meme
 * 
 * Method: POST
 */
export const toggleLike = async (req, res) => {
  console.log(req.body)
  const { memeId } = req.body;
  const userId = req.user._id;
  if (!memeId || !userId) {
    return res.status(400).json({ message: "Required fields are not set" });
  }

  const meme = await Meme.findById(memeId);
  if (!meme) {
    return res.status(404).json({ message: "Meme not found" });
  }

  const isLiked = meme.likes.includes(userId);
  if (isLiked) {
    meme.likes.pull(userId);
  } else {
    meme.likes.push(userId);
  }

  const updatedMeme = await meme.save();
  if (updatedMeme) {
    res.status(200).json({ message: "Meme liked successfully" });
  } else {
    res.status(400).json({ message: "Failed to like meme" });
  }
};

/**
 * Get a meme having a specific ID. Typically used for viewing a single meme.
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 *
 * The request object should contain the following fields:
 * - memeId: The ID of the meme
 * 
 * Method: GET
 */
export const getMemeById = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Meme ID not set" });
  }
  const meme = await Meme.findById(req.params.id)
    .populate("author")
    .populate("comments")
    .lean();
  if (!meme) {
    return res.status(404).json({ message: "Meme not found" });
  }
  return res.status(200).json(meme);
};

/**
 * Delete a meme having a specific ID
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 *
 * The request object should contain the following fields:
 * - memeId: The ID of the meme
 * 
 * Method: DEL
 */

export const deleteMeme = async (req, res) => {
  if (!req.memeId) {
    return res.status(400).json({ message: "Meme ID not set" });
  }
  const meme = await Meme.findById(req.memeId);
  if (!meme) {
    return res.status(404).json({ message: "Meme not found" });
  }
  await cloudinary.uploader.destroy(meme.imageId);
  await meme.remove();
  await User.updateOne({ _id: req.user._id }, { $pull: { memes: memeId } });
  return res.status(200).json({ message: "Meme deleted successfully" });
};
