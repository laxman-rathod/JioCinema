import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // set jwt as an HTTP-Only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 1000,
    });
    return token;
  } catch (error) {
    res.status(500).json({ msg: "Failed to generate token" });
  }
};

export default generateToken;
