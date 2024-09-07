import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export function verifyToken(req, res, next) {
 

  const token = req.header("Authorization");
  if (!token) {
  
    return res.status(401).json({ error: "Access denied" });
  }

  try {
   
    const tk = token.split(" ")[1]
    const decoded = jwt.verify(tk, process.env.SECRET_KEY);
    
    
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
