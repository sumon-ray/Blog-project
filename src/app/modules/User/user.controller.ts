import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import httpStatus from "http-status";

// Create User
const createUser = catchAsync(async (req, res) => {
    // console.log(req.body)
  const result = await UserServices.createUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is created successfully",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
  
    const result = await UserServices.login(email, password);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Login successful",
      data: result,
    });
  });

export const UserControllers = {
  createUser,
  login
};
