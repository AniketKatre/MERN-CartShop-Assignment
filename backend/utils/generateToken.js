import jwt from "jsonwebtoken";

const generatedToken = (res, userId) => {
  // create JSON web token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
    // 30 day expire
  });

  //set jwt as http-only cookies
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milisecond
  });
};

export default generatedToken;
