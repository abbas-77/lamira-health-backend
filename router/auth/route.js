import express from "express";
import { registerUser } from "../../controller/auth/register.js";
import { loginUser } from "../../controller/auth/login.js";


export const loginRoutes = express.Router();


// loginRoutes.get("/signup", (req, res)=> res.json("signUp"));
loginRoutes.post("/register", registerUser);
loginRoutes.post("/login", loginUser);