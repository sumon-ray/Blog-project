import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminService } from "./admin.service";
import httpStatus from "http-status";

const blockUser = catchAsync(async (req, res) => {
    const {userId} = req.params
 await AdminService.blockUser(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User blocked successfully"
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const result = await AdminService.deleteBlog(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete blog successfully",
    data: result,
  });
});

export const AdminController = {
  blockUser,
  deleteBlog,
};
