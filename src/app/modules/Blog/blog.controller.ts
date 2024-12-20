import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import sendResponses from "../../utils/sendResponses";
import { BlogServices } from "./blog.service";
import httpStatus from "http-status";


const createBlogIntoDB = catchAsync(async (req, res) => {
    const { title, content, isPublished } = req.body;
    const { id: userId } = req.user;
  
    const result = await BlogServices.createBlogIntoDB({ title, content, isPublished, author:userId });
  
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Blog created successfully",
      data: result,
    });
  });

const getAllBlogsFromDB = catchAsync(async(req,res)=>{
  const result =  await BlogServices.getAllBlogsFromDB(req.query)

  sendResponses(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs fetched successfully',
    data: result

  })


})

const updateBlogInDB = catchAsync(async(req, res)=>{
    const {id} = req.params ;
    const {id:userId} = req.user
  const result =  await BlogServices.updateBlogInDB(id, userId, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result

  })


})
const deleteBlogFromDB = catchAsync(async(req, res)=>{
    const {id} = req.params ;
    const {id:userId} = req.user
  const result =  await BlogServices.deleteBlogFromDB(id, userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'blog deleted successfully',
    data: result

  })


})


export const BlogController = {
  createBlogIntoDB,
  updateBlogInDB,
  deleteBlogFromDB,
  getAllBlogsFromDB
}