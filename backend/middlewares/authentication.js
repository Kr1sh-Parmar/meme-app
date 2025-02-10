import User from "../models/user.js";

export const authenticate = async (req, res, next) => {
  try {
    const user_id = req.cookies.user_id;
    // console.log(JSON.stringify(req.cookies));
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // req.user is used to store the user object for later use.
    req.user = user;
    console.log(req.body);
    
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
