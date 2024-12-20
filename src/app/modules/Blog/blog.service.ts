import QueryBuilder from "../../builder/QueryBuilder";
import { blogSearchableFields } from "./blog.constant";
import { TBlog } from "./blog.interface";
import BlogModel from "./blog.model";

const createBlogIntoDB = async (payload: TBlog) => {
    const result = await BlogModel.create(payload);
    return result;
  };
  
  const getAllBlogsFromDB = async(query: Record<string, unknown>)=>{
      
    const blogQery = new QueryBuilder(BlogModel.find().populate("author", "-password"), query)
    .search(blogSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()
  
    const result = await blogQery.modelQuery
    return result
}

const updateBlogInDB = async (id: string, userId: string, payload: TBlog) => {
    // Find the blog by its ID and check if the user is the author
    const blog = await BlogModel.findOne({ _id: id, author: userId });
    
    if (!blog) {
      throw new Error("Unauthorized to update this blog");  // You can throw an error or handle it as needed
    }
  
    // If the blog exists and the user is the author, update the blog
    const updatedBlog = await BlogModel.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
    return updatedBlog;
  };

  
  const deleteBlogFromDB = async (id: string, userId: string) => {
    const blog = await BlogModel.findOne({ _id: id, author: userId });
    if (!blog) {
      throw new Error("Unauthorized to delete this blog");
    }
  
    await BlogModel.findByIdAndDelete(id);
    return { message: "Blog deleted successfully" };
  };





  export const BlogServices = {
    createBlogIntoDB,
    updateBlogInDB,
    deleteBlogFromDB,
    getAllBlogsFromDB
    };