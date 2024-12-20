import { Router } from "express";
import { UserControllers } from "./user.controller";
import validateRequest from "../../middlwares/validateRequest";
import { UserValidation } from "./user.validation";

const router =Router();

router.post(
  "/create-user", validateRequest(UserValidation.createUserSchema),UserControllers.createUser);

export const UserRoute = router;
