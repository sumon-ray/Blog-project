import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { UserModel } from "../modules/User/user.model";
import AppError from "../errors/AppError";
import httpStatus from "http-status";

export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    console.log("Authorization header:", authHeader);

    if (!authHeader) {
      console.log("No Authorization header provided.");
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized: No token provided');
    }

    const token = authHeader.split(" ")[1];
    console.log("Extracted token:", token);

    if (!token) {
      console.log("Token is missing after splitting Authorization header.");
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized: No token provided');
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    console.log("Decoded token:", decoded);

    const user = await UserModel.findById(decoded.id);
    if (!user) {
      console.log("User not found for decoded ID:", decoded.id);
      throw new AppError(httpStatus.UNAUTHORIZED, 'User not found!');
    }

    console.log("Authenticated user:", user);
    (req as any).user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error);

    if (error instanceof jwt.JsonWebTokenError) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid token!');
    }

    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'An unexpected error occurred!');
  }
};
