// E-commerce_App-main/backend/middleware/auth.js
import jwt from "jsonwebtoken";

// Make sure the name here matches the name used in userRoute.js import
const authUser = async (req, res, next) => { // <-- Use authUser here
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized, Please login again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id; // CRUCIAL: Attaching ID from token to request
    next();
  } catch (error) {
    console.log(error);
    // Use a clearer message that won't break the frontend's understanding of an auth fail
    res.json({ success: false, message: "Not Authorized, Invalid Token" }); 
  }
};

export default authUser; // <-- And export authUser