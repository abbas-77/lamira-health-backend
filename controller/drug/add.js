import { SuccesResponse } from "../../config/response.js";
import expressAsyncHandler from "express-async-handler";
import drugModel from "../../model/drug/drugModel.js";

export const addDrug = expressAsyncHandler(async (req, res) => {
  const { name, dose, DateOfTakingMedicine, userId, cowId } = req.body;
  if (!name || !dose || !DateOfTakingMedicine || !userId || !cowId) {
    res.status(400);
    throw new errorHandler("لطفا اطلاعات را کامل وارد کنید");
  }

  const drug = await drugModel.create({
    name,
    dose,
    DateOfTakingMedicine,
    userId,
    cowId,
  });

  res.status(200).json(SuccesResponse(drug));
});
