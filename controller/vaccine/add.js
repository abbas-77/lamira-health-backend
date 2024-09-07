import { SuccesResponse } from "../../config/response.js";
import expressAsyncHandler from "express-async-handler";
import vaccineModel from "../../model/vaccine/vaccineModel.js";

export const addVaccine = expressAsyncHandler(async (req, res) => {
  const { name, dose, DateOfVaccination, userId, cowId } = req.body;
  if (!name || !dose || !DateOfVaccination || !userId || !cowId) {
    res.status(400);
    throw new errorHandler("لطفا اطلاعات را کامل وارد کنید");
  }

  const vaccine = await vaccineModel.create({
    name,
    dose,
    DateOfVaccination,
    userId,
    cowId,
  });

  res.status(200).json(SuccesResponse(vaccine));
});
