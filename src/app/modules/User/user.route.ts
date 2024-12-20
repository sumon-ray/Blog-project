import { Router } from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlwares/validateRequest";
import { UserValidation } from "./user.validation";

const router =Router();

router.post("/register", validateRequest(UserValidation.createUserSchema),UserControllers.createUser);
  router.post("/login", UserControllers.login);
export const UserRoute = router;
