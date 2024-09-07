import expressAsyncHandler from "express-async-handler";
import {SuccesResponse} from "../../config/response.js"
import vaccineModel from "../../model/vaccine/vaccineModel.js";

export const deleteProduct = expressAsyncHandler(async (req, res) => {
    const { vaccineId } = req.body;
  
    const findVaccine = await vaccineModel.findOne({ _id: vaccineId });
    if (!vaccineId) {
      res.status(400);
      throw new errorHandler("Please fill out vaccineId");
    }
    if (!findVaccine) {
      res.status(404);
      throw new errorHandler("vaccine not exist or its already removed");
    }
    await vaccineModel.deleteOne({ _id: vaccineId });
    res.status(200).send(SuccesResponse());
    return;
  });