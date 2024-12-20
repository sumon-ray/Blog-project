import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: TUser) => {
  const { email } = payload;

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) {
    throw new Error("Email is already in use");
  }
  const result = await UserModel.create(payload);
  return result;
};

export const UserServices = {
  createUser,
};
