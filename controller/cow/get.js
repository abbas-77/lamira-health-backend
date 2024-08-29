import expressAsyncHandler from "express-async-handler";
import cowModel from "../../model/cow/cowModel.js";
import {SuccesResponse} from "../../config/response.js"

export const getAllCows = expressAsyncHandler(async (req, res) => {
  const cows = await cowModel.find();

  if (!cows) {
    res.status(400).send([]);
    throw new errorHandler("There are no Cows");
  }

  const AllCows = [];
  cows.forEach((cow) => {
    const cows = {
      plateNumber: cow?.plateNumber,
      profileImg: cow?.profileImg,
      race: cow?.race,
      group: cow?.group,
    };
    AllCows.push(cows);
  });

  res.status(200).send(SuccesResponse(AllCows));
});

export const getCowById = expressAsyncHandler(async (req, res) => {
  const { id } = req.query;
  const cow = await cowModel.findOne({ _id: id });
  res.status(200).json(SuccesResponse(cow));
});
