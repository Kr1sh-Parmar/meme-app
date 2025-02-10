import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		meme: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Meme",
		},
	},
	{
		timestamps: true,
	},
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;