// // import { TLoginUser } from "./auth.interface"

// // const LoginUser = async ( payload: TLoginUser ) => {
// //     console.log(payload)
// // }


// // export const AuthService = {
// //     LoginUser
// // }



// // import { UserModel } from "../user/user.model";
// import { UserModel } from "../User/user.model";
// import { generateToken } from "./auth.utils";
// import { TLoginUser } from "./auth.interface";
// import AppError from "../../errors/AppError";
// import httpStatus from "http-status";
// // import { generateToken } from "../../utils/auth.utils";
// import bcrypt from "bcrypt"
// export const loginUser = async (payload: TLoginUser) => {
//   const isUserExist = await UserModel.findOne({id: payload?.id});
// //   if (!isUserExist) {
// //     throw new AppError(httpStatus.NOT_FOUND, 'this user is not found');
// //   }

// //   const isDeleted = user?.isDeleted 

//   if (isUserExist) {
//     throw new AppError(httpStatus.FORBIDDEN, 'this user is deleted')
//   }

//   // checking is the pass correct

//   const isPasswordMatched =await bcrypt.compare(payload?.password, isUserExist?.password)
// console.log(isPasswordMatched)
// return {}
// //   // Generate token
// //   const token = generateToken({ id: user._id, role: user.role });
// //   return { user, token };
// // };
// }

// export const AuthService = {
//     loginUser
// }
