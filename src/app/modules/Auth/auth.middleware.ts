// import { Request, Response, NextFunction } from "express";
// import httpStatus from "http-status";
// import { verifyToken } from "./auth.utils";

// export const authenticate = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

//   if (!token) {
//     return res.status(httpStatus.UNAUTHORIZED).json({ message: "No token provided" });
//   }
 
//   try {
//     const decoded = verifyToken(token);
//     req.user = decoded; // Attach user info to request
//     next();
//   } catch (error) {
//     return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid or expired token" });
//   }
// };
