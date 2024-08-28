//@desc Login user
//@route POST  /api/user/login

import jwt from "jsonwebtoken";
import { SuccesResponse } from "../../config/response.js";
import expressAsyncHandler from "express-async-handler";
import userModel from "../../model/user/userModel.js";
import * as bcrypt from "bcrypt";

//@access public
export const loginUser = expressAsyncHandler(async (req, res) => {
  const { phoneNumber, password } = req.body;
  if (!phoneNumber || !password) {
    res.json({
      message: "اطلاعات مورد نطر را وارد کنید",
      statusCode: 200,
      isSuccess: false,
    });
    return;
  }
  const userAvailable = await userModel.findOne({ phoneNumber });
  if (userAvailable && bcrypt.compare(password, userAvailable?.password)) {
    const token = jwt.sign({ userId: userAvailable._id },  process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    const userDataResponse = {
      username: userAvailable?.username,
      phoneNumber,
      role: userAvailable?.role,
      token,
    };
    res.status(200).json(SuccesResponse(userDataResponse));
    return;
  } else {
    res.status(200);
    res.json({
      message: "شماره تلفن یا رمز عبور صحیح نمی باشد ",
      statusCode: 200,
      isSuccess: false,
    });
    return;
  }
});
