import * as bcrypt from "bcrypt";
import { SuccesResponse } from "../../config/response.js";
import expressAsyncHandler from "express-async-handler";
import userModel from "../../model/user/userModel.js";



//@desc login to Mobile
//@route POST /api/register
//@access public
export const registerUser = expressAsyncHandler(async (req, res) => {
    const { username, password, phoneNumber  } = req.body;
  
    if (!username || !password || !phoneNumber ) {
      res.status(200);
    
      res.json({
        message: "اطلاعات مورد نطر را وارد کنید",
        statusCode: 200,
        isSuccess: false
      });
      return
    }
  
    const userAvailable = await userModel.findOne({ username });
    const userAvailablePhoneNumber = await userModel.findOne({ phoneNumber });
    if (userAvailable) {
      res.status(200);
     res.json({
        message: "این نام کاربری قبلا ثبت نام کرده است",
        statusCode: 200,
        isSuccess: false
      });
      return
    }
    if (userAvailablePhoneNumber) {
      res.status(200);
      // throw new er("your phonNumber already register");
  
     res.json({
        message: "این شماره تلفن قبلا در سیستم ثیت شده است",
        statusCode: 200,
        isSuccess: false
      });
      return
    }
    
  
   
    const hashPassword = await bcrypt.hash(password, 8);
  
    const user = await userModel.create({
      username,
      password: hashPassword,
      phoneNumber,
      role: "user",
    });
    const userDataResponse = {
      username: username,
      phoneNumber,
      role: "user",
    }
    res.status(200).json(SuccesResponse(userDataResponse));
      return
    
   
  });