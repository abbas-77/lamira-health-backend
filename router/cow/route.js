import express from "express";
import { getAllCows, getCowById } from "../../controller/cow/get.js";
import { addCow } from "../../controller/cow/add.js";
import { verifyToken } from "../../middleware/authMiddleware.js";


export const cowRoutes = express.Router();



cowRoutes.get("/getAll", verifyToken , getAllCows);
cowRoutes.get("/getcowById/:id", verifyToken , getCowById);
cowRoutes.post("/add", verifyToken , addCow);