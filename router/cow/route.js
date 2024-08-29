import express from "express";
import { getAllCows } from "../../controller/cow/get.js";
import { addCow } from "../../controller/cow/add.js";
import { verifyToken } from "../../middleware/authMiddleware.js";


export const cowRoutes = express.Router();



cowRoutes.get("/getAll", verifyToken , getAllCows);
cowRoutes.post("/add", verifyToken , addCow);