import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized!" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Check for admin flag and email
    if (!decodedToken.admin || decodedToken.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ success: false, message: "Unauthorized!" });
    }

    next();
  } catch (error) {
    console.log("Error while authenticating admin: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default adminAuth;
