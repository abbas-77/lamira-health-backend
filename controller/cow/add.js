import cowModel from "../../model/cow/cowModel.js";
import {SuccesResponse} from "../../config/response.js"
import expressAsyncHandler from "express-async-handler";

export const addCow = expressAsyncHandler(async (req, res) => {
  const {
    profileImg,
    race,
    plateNumber,
    fatherPlateNumber,
    group,
    birthDate,
    birthLoc,
    weight,
    receptionTime,
    motherPlateNumber,
  } = req.body;
  if (
    !profileImg ||
    !race ||
    !plateNumber ||
    !fatherPlateNumber ||
    !group ||
    !birthDate ||
    !birthLoc ||
    !weight ||
    !receptionTime ||
    !motherPlateNumber
  ) {
    res.status(400);
    throw new errorHandler("لطفا اطلاعات را کامل وارد کنید");
  }

  const cow = await cowModel.create({
    profileImg,
    race,
    plateNumber,
    fatherPlateNumber,
    motherPlateNumber,
    group,
    birthDate,
    birthLoc,
    weight,
    receptionTime,
  });
 
  res.status(200).json(SuccesResponse(cow));
});
