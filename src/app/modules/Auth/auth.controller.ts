import { Request, Response } from "express";
import bcrypt from "bcrypt";
import httpStatus from "http-status";
import { UserModel } from "../User/user.model";
import { generateToken } from "./auth.utils";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid email or password" });
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid email or password" });
  }

  // Generate JWT token
  const token = generateToken({ id: user._id, role: user.role });

  // Respond with token
  res.status(httpStatus.OK).json({
    success: true,
    message: "Login successful",
    token,
  });
};
