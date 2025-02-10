import User from "../models/user.js";

/**
 * Add a new user to the database / Sign up
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 *
 * The request object should contain the following fields:
 * - username: The username of the user
 * - password: The password of the user
 */
export const addUser = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(400).json({ message: "Required fields are not set" });
	}

	const user = await User.create({
		username,
		password,
	});

	user.save();

	if (user) {
		res.cookie("user_id", user._id, { maxAge: 2592000000 });
		return res.status(201).json({ message: "User added successfully" });
	}
	return res.status(500).json({ message: "Internal server error" });
};
/**
 * Login a user
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 *
 * The request object should contain the following fields:
 * - username: The username of the user
 * - password: The password of the user
 */
export const loginUser = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(400).json({ message: "Required fields are not set" });
	}

	const user = await User.findOne({ username, password }).lean().exec();

	if (!user) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	res.cookie("user_id", user._id, { maxAge: 2592000000 });
	return res.status(200).json({ message: "Login successful" });
};