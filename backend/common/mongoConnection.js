import mongoose from "mongoose";

const connectionString = process.env.MONGODB_URL || "";

export const initiateDBConnect = async () => {
	try {
		await mongoose
			.connect(connectionString)
			.then(() => console.log("- Connected to mongoDB database "))
			.catch((err) => console.log("-", err.message || err));
	} catch (error) {
		console.error("-", error.message || error);
	}
};