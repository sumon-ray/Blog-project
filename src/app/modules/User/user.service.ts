import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const createUser = async (payload: TUser) => {
  const { email } = payload;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    throw new Error("Email is already in use");
  }
  const result = await UserModel.create(payload);
  return result;
};

const login = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error("User Not Found");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

export const UserServices = {
  createUser,
  login,
};
