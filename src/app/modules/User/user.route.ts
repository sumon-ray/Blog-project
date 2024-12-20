import  express  from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlwares/validateRequest";
import { UserValidation } from "./user.validation";

const router =express.Router();

router.post("/register", validateRequest(UserValidation.createUserSchema),UserControllers.createUser);
  router.post("/login", UserControllers.login);
export const UserRoute = router;
