import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import { getAllVaccines, getVaccineById } from "../../controller/vaccine/get.js";
import { addVaccine } from "../../controller/vaccine/add.js";


export const vaccineRoutes = express.Router();



vaccineRoutes.get("/getAll", verifyToken , getAllVaccines);
vaccineRoutes.get("/getVaccineById/:id", verifyToken , getVaccineById);
vaccineRoutes.post("/add", verifyToken , addVaccine);