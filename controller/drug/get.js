import expressAsyncHandler from "express-async-handler";
import { SuccesResponse } from "../../config/response.js";
import drugModel from "../../model/drug/drugModel.js";

export const getAllDrugs = expressAsyncHandler(async (req, res) => {
  const drugs = await drugModel.find();
  if (!drugs) {
    res.status(400).send([]);
    throw new errorHandler("There are no drugs");
  }
  res.status(200).send(SuccesResponse(drugs));
});
