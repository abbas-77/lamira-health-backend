import expressAsyncHandler from "express-async-handler";
import {SuccesResponse} from "../../config/response.js"
import vaccineModel from "../../model/vaccine/vaccineModel.js";

export const getAllVaccines = expressAsyncHandler(async (req, res) => {
  const vaccines = await vaccineModel.find();

  if (!vaccines) {
    res.status(400).send([]);
    throw new errorHandler("There are no vaccines");
  }
  
//   const AllCows = [];
//   vaccines.forEach((vaccine) => {
//     const vaccineItem = {
//       plateNumber: cow?.plateNumber,
//       profileImg: cow?.profileImg,
//       race: cow?.race,
//       group: cow?.group,
//     };
//     AllCows.push(cows);
//   });

  res.status(200).send(SuccesResponse(vaccines));
});

export const getVaccineById = expressAsyncHandler(async (req, res) => {
  const { id } = req.query;
  const vaccine = await vaccineModel.findOne({ _id: id });
  res.status(200).json(SuccesResponse(vaccine));
});

