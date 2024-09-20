import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import { getAllDrugs } from "../../controller/drug/get.js";
import { addDrug } from "../../controller/drug/add.js";



export const drugRoutes = express.Router();



drugRoutes.get("/getAll", verifyToken , getAllDrugs);
drugRoutes.get("/add", verifyToken , addDrug);
